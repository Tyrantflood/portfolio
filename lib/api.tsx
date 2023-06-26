export const sendContacForm = async (data: any) =>
  fetch("portfoliopagesapiContact.tsx", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
