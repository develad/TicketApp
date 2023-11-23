import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  const data = await req.json();
  console.log(data);
  // res.status(200).json({ ...data });

  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  const resData = await response.json();

  return NextResponse.json(resData);
}
