import TodoCard from "./_components/TodoCard";

const fetchTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Could not fetch data");
    }
    const data = await res.json();
    return data.topics;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const topics = await fetchTopics();
  return (
    <main>
      {topics.map((topic) => (
        <TodoCard topic={topic} key={topic._id} />
      ))}
    </main>
  );
}
