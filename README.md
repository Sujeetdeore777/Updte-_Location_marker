# Location Marker

Location Marker is a full-stack application built using Django Rest Framework (DRF) for the backend and React for the frontend. It allows users to manage and view markers on a map interface.

## Functionality

### Frontend (React)

- The frontend application displays a map created with either [OpenLayers](https://openlayers.org/) or [Leaflet](https://leafletjs.com/), on which markers are shown.
- Users can click on markers to view popups displaying the name of the marker.

### Backend (DRF)

- The backend application provides two types of users: Admin and User.
- Admin:
  - Can perform CRUD operations on markers.
  - Can add new markers to the database.
  - Can edit and delete existing markers.
- User:
  - Can retrieve all markers available.
  - Can retrieve a single marker by name.

## Getting Started

### Prerequisites

- Python (>=3.6)
- Node.js (for React frontend)
- PostgreSQL (or another supported database)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/location-marker.git

2. Run project:
   ```bash
   cd backend
   python manage.py runserver

   cd map-app
   npm start

![image](https://github.com/Sujeetdeore777/Updte-_Location_marker/assets/118282006/34be1c38-02d8-4598-893a-06c670ab4185)
![image](https://github.com/Sujeetdeore777/Updte-_Location_marker/assets/118282006/434352cb-f4de-46be-9a1e-39bc8c7f411d)
![image](https://github.com/Sujeetdeore777/Updte-_Location_marker/assets/118282006/e627054d-a175-4cae-83ba-235ff97b79c6)





