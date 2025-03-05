import ItemList from "./item-list";

export const metadata = {
    title: "Week 6",
    description: "Week 6 Assignment",
}

export default function Page() {

    return(
        <main>
            <h1 className="text-3xl font-bold m-6 text-center">Week 6</h1>
            <ItemList/>
        </main>
    )
};