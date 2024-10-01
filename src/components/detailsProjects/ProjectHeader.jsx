export default function ProjectHeader({ name, location }) {
  return (
    <section className="bg-white rounded-lg shadow-lg m-4 p-6 border-l-4 border-green-500">
      <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
      <p className="text-gray-600 mt-2 text-lg italic">{location}</p>
    </section>
  );
}
