import React from "react";

const EditExpenseaPage = (props) =>
{ 
  console.log(props);
  return(
    <div>Hello from Edit Expense Page
    The parameter passed is  : {props.match.params.id}
    </div>
    
  );
}
export default EditExpenseaPage;
