// app/api/auth/route.ts
import { NextResponse } from 'next/server';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();
    return NextResponse.json({ token }); // Return token
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
    console.log('Attempting to log in with:', email, password);

  }


  const auth = getAuth();
  await signOut(auth); // Sign out user
  await auth.signOut(); // Sign out user
  return NextResponse.json({ message: 'Logged out' });
}
