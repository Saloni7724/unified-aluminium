import React, { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { auth, provider, db } from "../Components/firebase-init";
import {
  signInWithRedirect,
  getRedirectResult,
  signOut,
   onAuthStateChanged
} from "firebase/auth";

import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import "../css/Feedback.css";

export default function Feedback() {
  const [user, setUser] = useState(null);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  const fallbackPhoto = "https://randomuser.me/api/portraits/lego/1.jpg";

  /* ---------------- FETCH FEEDBACK ---------------- */
  useEffect(() => {
    const q = query(collection(db, "feedbacks"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonials(data);
    });

    return () => unsubscribe();
  }, []);

  /* ---------------- AUTO CAROUSEL ---------------- */
  useEffect(() => {
    if (testimonials.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [testimonials]);

  /* ---------------- GOOGLE LOGIN ---------------- */
  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider); // works on mobile & desktop
    } catch (error) {
      console.error(error);
      alert("Google login failed");
    }
  };

  /* ---------------- HANDLE REDIRECT RESULT ---------------- */
useEffect(() => {

  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    }
  });

  const checkRedirect = async () => {
    try {
      const result = await getRedirectResult(auth);
      if (result?.user) {
        setUser(result.user);
      }
    } catch (error) {
      console.error("Redirect error:", error);
    }
  };

  checkRedirect();

  return () => unsubscribe();

}, []);
  /* ---------------- SIGN OUT ---------------- */
  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  /* ---------------- SUBMIT FEEDBACK ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!review.trim()) return alert("Please write feedback!");
    if (!user) return alert("Please login first");

    try {
      await addDoc(collection(db, "feedbacks"), {
        name: user.displayName,
        review: review,
        rating: rating,
        photo: user.photoURL,
        timestamp: serverTimestamp(),
      });

      setReview("");
      setRating(5);

      alert("Feedback submitted!");
    } catch (error) {
      console.error(error);
    }
  };

  /* ---------------- CAROUSEL NAVIGATION ---------------- */
  const nextSlide = () => {
    if (testimonials.length === 0) return;
    setIndex((index + 1) % testimonials.length);
  };

  const prevSlide = () => {
    if (testimonials.length === 0) return;
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const customer = testimonials[index] || {};

  return (
    <section id="feedback" className="testimonial-section">
      <h2 className="testimonial-title">Customer Feedback</h2>

      <div className="feedback-section-wrapper">
        {/* LOGIN BUTTON */}
        {!user && (
          <button className="google-login-btn" onClick={handleGoogleLogin}>
            Sign in with Google to submit feedback
          </button>
        )}

        {/* USER INFO */}
        {user && (
          <div className="user-info">
            <img
              src={user.photoURL || fallbackPhoto}
              alt="User"
              className="user-photo"
              onError={(e) => (e.target.src = fallbackPhoto)}
            />
            <span>{user.displayName || "Anonymous"}</span>
            <button className="signout-btn" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}

        {/* FEEDBACK FORM */}
        {user && (
          <form className="feedback-form" onSubmit={handleSubmit}>
            <textarea
              placeholder="Your Feedback"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              {[5, 4, 3, 2, 1].map((r) => (
                <option key={r} value={r}>
                  {r} Star{r > 1 ? "s" : ""}
                </option>
              ))}
            </select>
            <button type="submit">Submit Feedback</button>
          </form>
        )}
      </div>

      {/* TESTIMONIAL CAROUSEL */}
      {testimonials.length > 0 ? (
        <div className="testimonial-container">
          <button className="arrow left" onClick={prevSlide}>
            <FaArrowLeft />
          </button>

          <div className="testimonial-card">
            <img
              src={customer?.photo}
              alt="Customer"
              className="customer-photo"
              referrerPolicy="no-referrer"
            />
            <p className="testimonial-text">{customer.review}</p>

            <div className="stars">
              {[...Array(customer.rating || 0)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <h4 className="customer-name">
              {customer.name || "Anonymous"}
              <span className="verified-wrapper">
                <MdVerified className="verified-badge" />
                <span className="verified-tooltip">Verified Google User</span>
              </span>
            </h4>
          </div>

          <button className="arrow right" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>
          No feedback yet. Be the first to comment!
        </p>
      )}
    </section>
  );
}