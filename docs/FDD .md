# Frontend Design Document (FDD)

## Purpose and Visual Aesthetics

[Ganga.co](http://Ganga.co) is a comparison web page with a minimalist and neutral structure focused on valuable product price information

### Color palette

- **Primary color:** #0F172A
- **Secondary color:** #2563EB
- **Tertiary color:** #F8FAFC
- **Neutral color:** #64748B

### Typography

- **Headline:** Manrope
- **Body:** Manrope
- **Label:** Inter

### Tone and feel

The interface aims to feel trustworthy and efficient, avoiding visual clutter to prioritize data density and decision-making.

## Component Architecture and Hierarchy

### Layout components

- **Nav:** Contains the brand name and a navigation section called “Inicio”.
- **Header:** Contains an H1 tag with the text “Resultados” and a search bar including a search icon,  and the placeholder “Buscar productos…”
- **Main:** Alternates between Skeleton loaders during data retieval, a 2x3 grid to display found products when the API returns data, or a **NoResults** component otherwise.
- **Footer:** Contains the brand name, social contact info, and the copyright symbol with the text “Minimalist Excellence”.

### Data display

**Product Grid:** A grid system composed of 3 columns. Each item is displayed ****using ****the ****Shadcn ****Card ****component, which features a minimalist style with the following characteristics:

- **E-commerce badge:** Blue for Mercado Libre and yellow for Éxito.
- **Rating**
- **Name**
- **Shipping cost**
- **Price in COP format**

### Feedback components and states

- **Skeleton Loaders:** UI ****placeholders that reflect the card's structure while the API is being consumed.
- **NoResults:** An illustrative component or a simple message that appears if the Numpy ****statistical ****filter does not find any valid products.

## Interactivity and User Flow

### Search trigger

When the user clicks the search icon or presses Enter, the system validates that the input is not empty and does not contain invalid characters.

### State management

- **Idle State:** The initial state when the user has not yet interacted with the search bar.
- **Is loading:** Triggered when a search is initiated. The system displays Skeleton ****loaders while fetching data from the API.
- **Success State:** Triggered when the API call finishes and returns data to be rendered in the grid.
- **Error State:** Triggered if the API fails or the request times out.

### API integration

The system performs a GET ****request using TanStack ****Query to the `/search` endpoint, passing the parameter `?product_name={product_name}`.

### Price formatting

- **Price:** Since the API returns the price as a raw integer, the frontend will format it as Colombian Pesos (COP) using the `Intl.NumberFormat` standard.
- **Rating:** If the rating is a number, it will be rendered as visual stars or a localized decimal.

## Frontend Tech Stack

- **Framework:** React (via Vite) for building a fast and optimized Single Page Application (SPA).
- **Styling:** Tailwind CSS for utility-first styling and responsive design.
- **UI** **Components:** Shadcn/ui for accessible, high-quality, and customizable components (Cards, Inputs, Buttons, Skeletons).
- **Icons:** Lucide React, and React Icons for minimalist and consistent iconography.
- **Data Fetching:** TanStack ****Query for managing asynchronous API states, caching, and loading/error handling.
- **Typography:** Google ****Fonts integrated via CSS or specialized Vite plugins.

## Folder Structure

- /ganga-frontend
    - src/
        - assets/                      # Static files (Logo, images, fonts)
        - components/             # UI components
            - ui/                      # Raw Shadcn components
            - shared/              # Reusable custom components
            - results/              # Logic-specific components (ProductCard, SkeletonGrid)
        - hooks/                      # Custom hooks
        - services/                  # Calls to the API
        - lib/                           # Utils
        - types/                      # Interfaces
        - App.tsx
        - main.tsx
    - tailwind.config.js
    - components.json