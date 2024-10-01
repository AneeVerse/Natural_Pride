// components/ProjectHeader.js
export default function ProjectHeader({ name , location }) {
    return (
      <section className="bg-white rounded-lg shadow-md m-4 p-6">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-gray-600 mt-2">{location}</p>
      </section>
    );
  }
  