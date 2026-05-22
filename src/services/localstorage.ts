import type { ICar } from "../types/carinho";

export function getLocalstorage(): ICar[] {
  const response = localStorage.getItem("@car");

  return JSON.parse(response || "[]");
}

export const addCar = (newCar: ICar) => {
  const cars: ICar[] = JSON.parse(localStorage.getItem("@car") || "[]");

  localStorage.setItem("@car", JSON.stringify([...cars, newCar]));
};

export const deleteCar = (id: number) => {
  const cars: ICar[] = JSON.parse(localStorage.getItem("@car") || "[]");

  const newcars: ICar[] = cars.filter((item) => item.id !== id);

  localStorage.setItem("@car", JSON.stringify(newcars));
};
