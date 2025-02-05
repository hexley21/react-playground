import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
    index("routes/welcome.tsx"),
    route("explore", "routes/explore.tsx"),
    route("coins/:coinId", "routes/details.tsx")
] satisfies RouteConfig
