import React from "react";
export default function RecipeList(props) {
  const { label, image, url, ingredients } = props.list;
  return (
    <div className=" my-10 ml-3">
      <div className="card h-96 w-72 bg-base-100 shadow-xl">
        <figure className="">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body px-3">
          <h2 className="card-title">{label.toString().slice(0, 20)}</h2>
          <div className="card-actions justify-center">
            <button
              className="btn btn-success btn-outline btn-sm px-[5.5rem]"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Ingredients
            </button>
            <button
              className="btn btn-error  btn-outline btn-sm px-20"
              onClick={() => window.open(url)}
            >
              See Full Recipe
            </button>
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <ul className="px-3">
            {ingredients.map((e) => (
              <li className="list-disc">{e.text}</li>
            ))}
          </ul>
          <div className="modal-action">
            <form method="dialog">
              <button
                className="btn mr-3 btn-sm btn-success btn-outline"
                onClick={() => window.open(url)}
              >
                See More
              </button>
              <button className="btn btn-sm btn-error btn-outline ">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
