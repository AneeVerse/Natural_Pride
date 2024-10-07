export default function ProjectHeader({ name }) {
  return (
    <section className="bg-white rounded-lg shadow-lg m-4 p-6 border-l-4 border-green-500">
      <h1 className=" text-2xl sm:text-4xl font-bold text-gray-800">{name}</h1>
    </section>
  );
}
