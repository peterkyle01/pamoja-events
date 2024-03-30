import {  Tevent, Tticket } from "./types";

export const ticketsData: Tticket[] = [
  {
    id: "1",
    event_id: "2",
    name: "John Doe",
    email: "john@example.com",
    phone_number: 1234567890,
    image: "/event.jpg",
    date: new Date("2024-04-01"),
    type: "REGULAR"
  },
  {
    id: "2",
    event_id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone_number: 9876543210,
    image: "/event.jpg",
    date: new Date("2024-04-02"),
    type: "VIP"
  },
  {
    id: "3",
    event_id: "2",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone_number: 4567890123,
    image: "/event.jpg",
    date: new Date("2024-04-03"),
    type: "VVIP"
  },
  {
    id: "4",
    event_id: "2",
    name: "Bob Smith",
    email: "bob@example.com",
    phone_number: 5551234567,
    image: "/event.jpg",
    date: new Date("2024-05-15"),
    type: "REGULAR"
  },
  {
    id: "5",
    event_id: "2",
    name: "Emma Davis",
    email: "emma@example.com",
    phone_number: 9876543210,
    image: "/event.jpg",
    date: new Date("2024-06-10"),
    type: "VIP"
  },
  {
    id: "6",
    event_id: "2",
    name: "John Miller",
    email: "john@example.com",
    phone_number: 1234567890,
    image: "/event.jpg",
    date: new Date("2024-07-20"),
    type: "VIP"
  },
  {
    id: "7",
    event_id: "2",
    name: "Sarah Thompson",
    email: "sarah@example.com",
    phone_number: 6789012345,
    image: "/event.jpg",
    date: new Date("2024-08-05"),
    type: "VVIP"
  },
  {
    id: "8",
    event_id: "2",
    name: "Michael Wilson",
    email: "michael@example.com",
    phone_number: 3456789012,
    image: "/event.jpg",
    date: new Date("2024-09-15"),
    type: "REGULAR"
  },
];

export const eventsData: Tevent[] = [
  {
    id: "1",
    name: "Music Festival",
    image: "/event.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    location: "Central Park",
    date: new Date("2024-09-15"),
    time: "18:00",
    organizer_id: "101",
    regular_tickets: 500,
    vip_tickets: 100,
    vvip_tickets: 50,
  },
  {
    id: "2",
    name: "Food Expo",
    image: "/event.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    location: "Convention Center",
    date: new Date("2024-09-15"),
    time: "10:00",
    organizer_id: "102",
    regular_tickets: 1000,
    vip_tickets: 200,
    vvip_tickets: 100,
  },
  {
    id: "3",
    name: "Food Expo",
    image: "/event.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    location: "Exhibition Hall",
    date: new Date("2024-09-15"),
    time: "11:00",
    organizer_id: "9012",
    regular_tickets: 800,
    vip_tickets: 150,
    vvip_tickets: 30,
  },
  {
    id: "4",
    name: "Fashion Show",
    image: "/event.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    location: "Grand Theater",
    date: new Date("2024-09-15"),
    time: "19:30",
    organizer_id: "3456",
    regular_tickets: 700,
    vip_tickets: 100,
    vvip_tickets: 25,
  },
  {
    id: "5",
    name: "Sports Tournament",
    image: "/event.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    location: "Stadium",
    date: new Date("2024-09-15"),
    time: "10:00",
    organizer_id: "7890",
    regular_tickets: 2000,
    vip_tickets: 300,
    vvip_tickets: 50,
  },
  {
    id: "6",
    name: "Art Exhibition",
    image: "/event.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    location: "Art Gallery",
    date: new Date("2024-09-15"),
    time: "12:00",
    organizer_id: "2345",
    regular_tickets: 400,
    vip_tickets: 50,
    vvip_tickets: 10,
  },
  {
    id: "7",
    name: "Film Festival",
    image: "/event.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    location: "Cinema Complex",
    date: new Date("2024-09-15"),
    time: "17:00",
    organizer_id: "6789",
    regular_tickets: 1200,
    vip_tickets: 200,
    vvip_tickets: 40,
  },
  {
    id: "8",
    name: "Business Summit",
    image: "/event.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    location: "Conference Hall",
    date: new Date("2024-09-15"),
    time: "08:30",
    organizer_id: "12345",
    regular_tickets: 600,
    vip_tickets: 100,
    vvip_tickets: 20,
  },
  {
    id: "9",
    name: "Science Fair",
    image: "/event.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    location: "Science Museum",
    date: new Date("2024-09-15"),
    time: "10:00",
    organizer_id: "67890",
    regular_tickets: 300,
    vip_tickets: 50,
    vvip_tickets: 10,
  },
  {
    id: "10",
    name: "Comedy Show",
    image: "/event.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    location: "Comedy Club",
    date: new Date("2024-09-15"),
    time: "20:00",
    organizer_id: "23456",
    regular_tickets: 400,
    vip_tickets: 80,
    vvip_tickets: 15,
  },
  {
    id: "11",
    name: "Educational Workshop",
    image: "/event.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    location: "Community Center",
    date: new Date("2024-09-15"),
    time: "14:00",
    organizer_id: "78901",
    regular_tickets: 200,
    vip_tickets: 30,
    vvip_tickets: 5,
  },
];