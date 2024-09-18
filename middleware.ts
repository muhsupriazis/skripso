import {NextResponse, type NextRequest} from 'next/server';

export async function middleware(request: NextRequest) {
  const cookies = request.cookies;
  const pathname = request.nextUrl.pathname;

  const token = cookies.get('token');

  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);
  NextResponse.next({ headers });

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /about
    if (token?.value !== 'admin') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}


