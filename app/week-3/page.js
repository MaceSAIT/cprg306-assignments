import ItemList from "./item-list";

export default function Page() {
    //return(<div>{greet("Mace")}</div>);
    return(
        <main>
            <h1 className="text-3xl font-bold m-6 text-center">Shopping List</h1>
            <ItemList/>
        </main>
    )
};