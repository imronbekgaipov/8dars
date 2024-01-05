import React from "react";
import Link from "next/link";
const getData = async (id) => {
  const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await req.json();
  return data;
};
async function page({ params }) {
  const data = await getData(params.id);
  return (
    <div className="w-full">
      <ul className="flex flex-col items-center min-h-screen justify-center">
        <li class="justify-between p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
          <div>
            <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              title: {data.title}
              <p class="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
                completed: {data.completed ? "✅" : "❌"}
              </p>
            </h5>
          </div>
          <Link
            href={`/`}
            class="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Back
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default page;
