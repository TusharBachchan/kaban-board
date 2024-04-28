import DeleteIcon from "../icons/DeleteIcon";
import { Id, column } from "../types";

interface props {
  column: column;
  deleteColumn: (id: Id) => void;
}
function ColumnContainer(props: props) {
  const { column, deleteColumn } = props;
  return (
    <div
      className="
    h-[500px]
    w-[350px]
    max-h-[500px]
    bg-columnBackgroundColor
    rounded-md
    flex
    flex-col
    "
    >
      {/* Header : (Count of Items and Title) + (delete button) -> 2 divs*/}
      <div className="
      header 
      flex 
      justify-between
      bg-mainBackgroundColor
      text-md
      cursor-grab
      rounded-md
      rounded-b-none
      p-3
      font-bold
      border-columnBackgroundColor
      border-4
      ">
        <div className="countOfItemsAndTitle 
        flex 
        gap-2
        
        ">
          <div className="
          flex
          justify-center
          items-center
          bg-columnBackgroundColor
          px-2
          py-1
          text-sm
          rounded-full
          ">0</div>
          {column.title}
        </div>
        <button className="delete
        stroke-gray-500
        hover:stroke-white
        hover:bg-columnBackgroundColor
        rounded
        px-1
        py-2
        "
        onClick={() => {
            deleteColumn(column.id);
        }}
        >
            <DeleteIcon />
        </button>
      </div>

      {/* Column items */}
      <div className="flex flex-grow">Content</div>
      {/* Column Footer */}
      <div className="footer">Footer</div>
    </div>
  );
}

export default ColumnContainer;
