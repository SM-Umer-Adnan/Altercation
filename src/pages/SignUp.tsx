import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
    document.title = "Altercation Sign Up | Esports Platform";
    // Meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      'content',
      'Create your Altercation account to join tournaments, follow streams, and build your profile.'
    );

    // Canonical tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);
  }, []);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "url(/images/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="w-full" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <section className="w-full max-w-md px-6">
         <img
  src="/images/Altercationlogo.png"
  alt="Altercation Logo"
  className="w-full h-40 object-contain mx-auto"
/>

          <article className="bg-transparent">
            <form onSubmit={onSubmit} className="space-y-4 max-w-md">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  autoComplete="username"
                  className="bg-foreground text-background placeholder:text-background/70"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="bg-foreground text-background placeholder:text-background/70"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  className="bg-foreground text-background placeholder:text-background/70"
                />
              </div>

              <div className="flex items-center justify-center pt-2">
                <Button type="submit" className="gaming-button text-white hover:text-white px-8 font-semibold uppercase">
                  Next
                </Button>
              </div>

              <p className="sr-only">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </form>
          </article>
        </section>
      </main>
    </div>
  );
};

export default SignUp;
