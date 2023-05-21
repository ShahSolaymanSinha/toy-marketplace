export default async function homePageLoader() {
    const cars = await fetch("https://a11-server-side-six.vercel.app/cars");
    const carsParsed = await cars.json();

    const trucks = await fetch("https://a11-server-side-six.vercel.app/trucks");
    const truckParsed = await trucks.json();

    const policeCars = await fetch("https://a11-server-side-six.vercel.app/police-cars");
    const policeCarsParsed = await policeCars.json();

    return [carsParsed, truckParsed, policeCarsParsed];
}
