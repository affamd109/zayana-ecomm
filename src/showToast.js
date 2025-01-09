export const showToast = (operation , cardNo) =>{
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if(operation === "add"){
        toast.textContent = `Product with ID ${cardNo} has been added.`;
    }
    else{
        toast.textContent = `Product with ID ${cardNo} has been removed.`;
    }


    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);

};