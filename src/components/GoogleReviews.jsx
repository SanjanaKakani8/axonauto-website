import { reviews, googleRating } from "../data/reviews";
import { Star } from "lucide-react";

export default function GoogleReviews() {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="container-page">

        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Google Reviews</p>

          <h2 className="section-heading">
            Rated on Google
          </h2>

          <p className="text-ash/70 mt-3">
            See what our customers are saying about us
          </p>
        </div>

        {/* Rating Card */}

        <div className="max-w-xl mx-auto rounded-3xl border border-white/10 bg-secondary/40 p-8 text-center mb-12">

          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google"
            className="h-10 mx-auto mb-5 object-contain"
          />

          <h2 className="text-5xl font-bold text-white">
            {googleRating.rating}
          </h2>

          <div className="flex justify-center gap-1 my-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                fill="#FFD700"
                color="#FFD700"
              />
            ))}
          </div>

          <p className="text-ash/70">
            Based on {googleRating.totalReviews}+ Google Reviews
          </p>

         

        </div>

        {/* Reviews */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="rounded-3xl border border-white/10 bg-secondary/40 p-6 hover:border-primary transition"
            >

              <div className="flex gap-4 items-center mb-4">

                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>

                <div>

                  <h3 className="text-white font-semibold">
                    {review.name}
                  </h3>

                  <p className="text-xs text-ash/60">
                    {review.time}
                  </p>

                </div>

              </div>

              <div className="flex gap-1 mb-4">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#FFD700"
                    color="#FFD700"
                  />
                ))}

              </div>

              <p className="text-ash/80 leading-7 whitespace-pre-line">
                {review.review}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}