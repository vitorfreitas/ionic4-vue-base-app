export function AuthToMain(to: any, from: any, next: any) {
  const token = localStorage.getItem("BaseAppToken");
  if (token) {
    next();
  } else {
    next({
      name: "login"
    });
  }
}

export function AuthToLogin(to: any, from: any, next: any) {
  const token = localStorage.getItem("BaseAppToken");
  if (!token) {
    next();
  } else {
    next({
      path: "/"
    });
  }
}
