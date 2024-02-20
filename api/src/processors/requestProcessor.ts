import { SeatsAero } from "../clients/Seats.Aero/client"
import { SeatsCachedSearchParams, SEAT_CLASS } from "../clients/Seats.Aero/types";
import { SearchParams } from "../clients/client_interface";


const handleRequest = async (body: SearchParams) => {
    const seatsAero = new SeatsAero(process.env.SEATS_API!)
    const searchParams: SeatsCachedSearchParams = {
        origin_airport: "JFK",
        destination_airport: "LAX",
        cabin: SEAT_CLASS.ECONOMY,
        start_date: "2024-05-01",
        end_date: "2024-05-01" // TODO: as of now, the end_date is not optional
    }
    await seatsAero.find_route(searchParams)
}

export { handleRequest };