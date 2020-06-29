import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/del.svg";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { ReactComponent as ClearIcon } from "../../assets/clear.svg";

function TableRow({ item, updateNewRow, deleteTableRow, isAdding }: any) {
  const [isEditing, setIsEditing] = useState<any>(false);
  const [deleteRow, setDeleteRow] = useState<any>(false);

  const { register, handleSubmit } = useForm<any>();

  function handleEditing() {
    setIsEditing((prevState: any) => !prevState);
  }

  const onSubmit = (data: any) => {
    updateNewRow(item.id, data);
    setIsEditing(false);
  };

  function handleDeleteRow() {
    setDeleteRow((prevState: any) => !prevState);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="table-data">
      <div className="icon-box">
        <div>
          {!isEditing && !deleteRow ? (
            <EditIcon className="icon" onClick={() => handleEditing()} />
          ) : (
            <CheckIcon
              className="icon"
              onClick={
                !deleteRow ? handleSubmit(onSubmit) : () => deleteTableRow()
              }
            />
          )}
        </div>
        <div>
          {!isEditing && !deleteRow ? (
            <DeleteIcon className="icon" onClick={() => handleDeleteRow()} />
          ) : (
            <ClearIcon
              className="icon"
              onClick={
                !deleteRow ? () => handleEditing() : () => handleDeleteRow()
              }
            />
          )}
        </div>
      </div>
      {!deleteRow ? (
        <>
          <div>
            <input
              placeholder="first name..."
              className={isEditing ? "inputField" : "textField"}
              defaultValue={item.firstName}
              onChange={(e) => e.target.value}
              name="firstName"
              ref={register}
            />
          </div>
          <div>
            <input
              placeholder="last name..."
              className={isEditing ? "inputField" : "textField"}
              defaultValue={item.lastName}
              onChange={(e) => e.target.value}
              name="lastName"
              ref={register}
            />
          </div>
          <div>
            <input
              placeholder="birth year..."
              className={isEditing ? "inputField" : "textField"}
              defaultValue={item.birthYear}
              onChange={(e) => e.target.value}
              name="birthYear"
              ref={register}
              type="number"
            />
          </div>
          <div>
            <input
              placeholder="birth place..."
              className={isEditing ? "inputField" : "textField"}
              defaultValue={item.birthPlace}
              onChange={(e) => e.target.value}
              name="birthPlace"
              ref={register}
            />
          </div>
        </>
      ) : (
        <span>Are you sure you want to delete Row?</span>
      )}
    </form>
  );
}

export default TableRow;
