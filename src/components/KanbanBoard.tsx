import PlusIcon from "../icons/PlusIcon";
import { useMemo, useState } from "react"
import { Id, column } from "../types";
import ColumnContainer from "./ColumnContainer";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

export default function KanbanBoard() {
    const [columns, setColumns] = useState<column[]>([]);
    const columnsId = useMemo(() => columns.map((col) => col.id), 
    [columns])
  return (
    <DndContext>
      <div
        className="
    m-auto
    flex
    min-h-screen
    w-full
    items-center
    overflow-x-auto
    px-[40px]
    border
    border-red-400
    "
      >
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer
                  key={col.id}
                  column={col}
                  deleteColumn={deleteColumn}
                />
              ))}
            </SortableContext>
          </div>
          <button
            className="
        h-[60px]
        w-[350px]
        min-w-[350px]
        cursor-pointer
        rounded-lg
        bg-mainBackgroundColor
        border-2
        border-columnBackgroundColor
        p-4
        ring-rose-500
        hover:ring-2
        flex
        gap-2
        "
            onClick={() => {
              createNewColumn();
            }}
          >
            <PlusIcon />
            Add Column
          </button>
        </div>
      </div>
    </DndContext>
  );

  function createNewColumn() {
    const newColumn : column = {
        id: generateId(),
        title: `column ${columns.length + 1}`
    }
    setColumns([...columns, newColumn])
  }
  function generateId(){
    return Math.floor(Math.random() * 10001)
  }
  function deleteColumn(id: Id): void{
    const filteredArray = columns.filter((col) => col.id !== id);
    setColumns(filteredArray)
  }
}
