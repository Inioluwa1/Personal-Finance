export const loginUser = async (data: {email: string, password: string}) => {
  const response = await fetch ("", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if(!response.ok){
    throw new Error("Login failed")
  }

  return response.json()
}

export const signupUser = async (data: {
  name: string,
  email: string,
  password: string,
}) => {
  const response = await fetch("", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data)
  })

  if(!response.ok){
    throw new Error ("Signup failed")
  }

  return response.json()
}