import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import routesConfig from "../../routes/routesConfig";

function AssignModule(props) {
  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);

  const excludedModules = routesConfig
    .filter((route) => !route.canBeAssigned)
    .map((route) => route.name);

  const allModules = routesConfig
    .map((route) => route.name)
    .filter((name) => !excludedModules.includes(name));

  // Fetch modules of selected user
  useEffect(() => {
    async function getUserModules() {
      if (props.selectedUser) {
        try {
          const res = await axios(
            `https://sameer-yadav.online/api/get-user-modules/${props.selectedUser}`,
            {
              withCredentials: true,
            }
          );

          setRight(res.data.modules?.sort());
          setLeft(
            allModules
              .sort()
              .filter((module) => !res.data.modules?.includes(module))
          );
        } catch (error) {
          console.error("Error occurred while fetching user modules:", error);
        }
      } else {
        setLeft([]);
        setRight([]);
      }
    }

    getUserModules();
    // eslint-disable-next-line
  }, [props.selectedUser]);

  const handleDragEnd = async (result) => {
    const { source, destination } = result;

    // If no destination, exit
    if (!destination) return;

    const sourceList = source.droppableId === "left" ? left : right;
    const destList = destination.droppableId === "left" ? left : right;
    const setSourceList = source.droppableId === "left" ? setLeft : setRight;
    const setDestList = destination.droppableId === "left" ? setLeft : setRight;

    // Moving within the same list
    if (source.droppableId === destination.droppableId) {
      const reorderedList = Array.from(sourceList);
      const [movedItem] = reorderedList.splice(source.index, 1);
      reorderedList.splice(destination.index, 0, movedItem);
      setSourceList(reorderedList);
    }
    // Moving between lists
    else {
      const newSourceList = Array.from(sourceList);
      const newDestList = Array.from(destList);
      const [movedItem] = newSourceList.splice(source.index, 1);
      newDestList.splice(destination.index, 0, movedItem);

      setSourceList(newSourceList);
      setDestList(newDestList);

      // API call for assignment/unassignment
      const apiEndpoint =
        destination.droppableId === "right"
          ? `https://sameer-yadav.online/api/assign-modules`
          : `https://sameer-yadav.online/api/unassign-modules`;

      try {
        await axios.post(
          apiEndpoint,
          {
            modules: [movedItem],
            username: props.selectedUser,
          },
          {
            withCredentials: true,
          }
        );
      } catch (error) {
        console.error(
          destination.droppableId === "right"
            ? "Error occurred during module assignment:"
            : "Error occurred during module unassignment:",
          error
        );
      }
    }
  };

  const renderList = (title, items, droppableId) => (
    <Card style={{ maxHeight: "80vh" }}>
      <CardHeader
        sx={{ px: 2 }}
        title={title}
        subheader={`${items.length} modules`}
      />
      <Divider />
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              minHeight: 600,
              maxHeight: 600,
              width: 400,
              padding: 10,
              overflowY: "auto",
            }}
          >
            {items.map((item, index) => (
              <Draggable key={item} draggableId={item} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      padding: 10,
                      marginBottom: "12px",
                      backgroundColor: snapshot.isDragging
                        ? "#D2E0FB"
                        : "white",
                      boxShadow: "2px 2px 50px 10px rgba(0, 0, 0, 0.05)",
                      borderRadius: 4,
                    }}
                  >
                    {item}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Card>
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>{renderList("Available Modules", left, "left")}</Grid>
        <Grid item>{renderList("Assigned Modules", right, "right")}</Grid>
      </Grid>
    </DragDropContext>
  );
}

export default React.memo(AssignModule);
