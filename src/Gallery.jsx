import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { useGlobalContext } from "./context"

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`
console.log('here', import.meta.env.VITE_API_KEY)


const Gallery = () => {
    const { searchTerm } = useGlobalContext()
    const response = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: async () => {
            const result = await axios(`${url}&query=${searchTerm}`)
            return result.data
        },
    })
    // console.log('here', response)
    if(response.isLoading) {
        return <section className="image-container">
            <h4>Loading...</h4>
        </section>
    }
    if(response.isError) {
        return <section className="image-container">
            <h4>There was an error...</h4>
        </section>
    }
    const results = response.data.results
    if(results.length < 1) {
        return <section className="image-container">
            <h4>No results found...</h4>
        </section>
    }

    return (
        <section className="image-container">
            {results.map((item) => {
                const { id, urls: { regular }, alt_description} = item
                return <img src={regular} key={id} alt={alt_description} className="img"/>
            })}
        </section>
    )
}

export default Gallery

/*
{
    "id": "9l_326FISzk",
    "slug": "apple-macbook-beside-computer-mouse-on-table-9l_326FISzk",
    "alternative_slugs": {
        "en": "apple-macbook-beside-computer-mouse-on-table-9l_326FISzk",
        "es": "apple-macbook-junto-al-raton-del-ordenador-sobre-la-mesa-9l_326FISzk",
        "ja": "apple-macbook-テーブルの上のコンピュータのマウスの横-9l_326FISzk",
        "fr": "apple-macbook-a-cote-de-la-souris-de-lordinateur-sur-la-table-9l_326FISzk",
        "it": "apple-macbook-accanto-al-mouse-del-computer-sul-tavolo-9l_326FISzk",
        "ko": "테이블-위의-컴퓨터-마우스-옆에-있는-apple-macbook-9l_326FISzk",
        "de": "apple-macbook-neben-computermaus-auf-tisch-9l_326FISzk",
        "pt": "apple-macbook-ao-lado-do-mouse-do-computador-na-mesa-9l_326FISzk"
    },
    "created_at": "2017-02-13T20:20:43Z",
    "updated_at": "2025-01-20T19:55:41Z",
    "promoted_at": "2017-02-13T20:20:43Z",
    "width": 5426,
    "height": 3617,
    "color": "#262626",
    "blur_hash": "LIBpa]NG00t7?HIVIU%MxZs:IoRj",
    "description": "Desktop after work",
    "alt_description": "Apple MacBook beside computer mouse on table",
    "breadcrumbs": [],
    "urls": {
        "raw": "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixid=M3w2OTk0MDZ8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzM3NDM4NDMzfDA&ixlib=rb-4.0.3",
        "full": "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTk0MDZ8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzM3NDM4NDMzfDA&ixlib=rb-4.0.3&q=85",
        "regular": "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2OTk0MDZ8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzM3NDM4NDMzfDA&ixlib=rb-4.0.3&q=80&w=1080",
        "small": "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2OTk0MDZ8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzM3NDM4NDMzfDA&ixlib=rb-4.0.3&q=80&w=400",
        "thumb": "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2OTk0MDZ8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzM3NDM4NDMzfDA&ixlib=rb-4.0.3&q=80&w=200",
        "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1487017159836-4e23ece2e4cf"
    },
    "links": {
        "self": "https://api.unsplash.com/photos/apple-macbook-beside-computer-mouse-on-table-9l_326FISzk",
        "html": "https://unsplash.com/photos/apple-macbook-beside-computer-mouse-on-table-9l_326FISzk",
        "download": "https://unsplash.com/photos/9l_326FISzk/download?ixid=M3w2OTk0MDZ8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzM3NDM4NDMzfDA",
        "download_location": "https://api.unsplash.com/photos/9l_326FISzk/download?ixid=M3w2OTk0MDZ8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzM3NDM4NDMzfDA"
    },
    "likes": 5285,
    "liked_by_user": false,
    "current_user_collections": [],
    "sponsorship": null,
    "topic_submissions": {
        "business-work": {
            "status": "approved",
            "approved_on": "2020-04-06T14:20:15Z"
        },
        "technology": {
            "status": "approved",
            "approved_on": "2020-06-16T13:23:46Z"
        }
    },
    "asset_type": "photo",
    "user": {
        "id": "TrMEfNqww7s",
        "updated_at": "2025-01-21T00:12:36Z",
        "username": "lucabravo",
        "name": "Luca Bravo",
        "first_name": "Luca",
        "last_name": "Bravo",
        "twitter_username": "hz",
        "portfolio_url": "https://instagram.com/lucabravo/",
        "bio": "Hi, I’m Luca Bravo, an Italian UX designer and front-end web developer based in Cremona, Italy.\r\nI draw inspiration from silent hills, foggy mounts, cold lakes, the complex simplicity of patterns and urban architecture.",
        "location": "Italy",
        "links": {
            "self": "https://api.unsplash.com/users/lucabravo",
            "html": "https://unsplash.com/@lucabravo",
            "photos": "https://api.unsplash.com/users/lucabravo/photos",
            "likes": "https://api.unsplash.com/users/lucabravo/likes",
            "portfolio": "https://api.unsplash.com/users/lucabravo/portfolio",
            "following": "https://api.unsplash.com/users/lucabravo/following",
            "followers": "https://api.unsplash.com/users/lucabravo/followers"
        },
        "profile_image": {
            "small": "https://images.unsplash.com/profile-1585521746678-1988925483d3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
            "medium": "https://images.unsplash.com/profile-1585521746678-1988925483d3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
            "large": "https://images.unsplash.com/profile-1585521746678-1988925483d3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
        },
        "instagram_username": "lucabravo",
        "total_collections": 5,
        "total_likes": 158,
        "total_photos": 198,
        "total_promoted_photos": 145,
        "total_illustrations": 0,
        "total_promoted_illustrations": 0,
        "accepted_tos": true,
        "for_hire": false,
        "social": {
            "instagram_username": "lucabravo",
            "portfolio_url": "https://instagram.com/lucabravo/",
            "twitter_username": "hz",
            "paypal_email": null
        }
    }
}

*/