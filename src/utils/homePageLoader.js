export default async function homePageLoader() {
    const cars = await fetch("http://localhost:5000/cars");
    const carsParsed = await cars.json();

    const trucks = await fetch("http://localhost:5000/trucks");
    const truckParsed = await trucks.json();

    const policeCars = await fetch("http://localhost:5000/police-cars");
    const policeCarsParsed = await policeCars.json();

    return [carsParsed, truckParsed, policeCarsParsed];
}
