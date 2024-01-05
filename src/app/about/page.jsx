import Link from "next/link";
import React from "react";

const getData = async () => {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await req.json();
  return data;
};
async function About() {
  const data = await getData();
  console.log(data);
  return (
    <div className="mt-14">
      <ul className="h-96">
        {data.map((todo) => {
          return (
            <li class="flex justify-between p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {todo.title}
              </h5>

              <Link
                href={`about/${todo.id}`}
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Read more
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default About;
