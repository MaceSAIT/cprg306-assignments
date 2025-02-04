import ItemList from "./item-list";

export const metadata = {
    title: "Shopping List",
    description: "Week 3 shopping list",
}

export default function Page() {

    return(
        <main>
            <h1 className="text-3xl font-bold m-6 text-center">Shopping List</h1>
            <ItemList/>
        </main>
    )
};