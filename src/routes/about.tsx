import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Building2, MapPin, Phone, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="container mx-auto py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Our Store</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Welcome to our online marketplace, where quality meets convenience.
          We've been serving customers since 2010, providing the best products
          at competitive prices.
        </p>
      </div>

      {/* Mission and Values Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To provide our customers with the highest quality products while
              delivering exceptional shopping experience and maintaining the
              highest standards of customer service.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Customer Satisfaction</li>
              <li>Quality Products</li>
              <li>Integrity & Transparency</li>
              <li>Innovation</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: "Products", value: "1000+" },
          { label: "Customers", value: "50k+" },
          { label: "Countries", value: "25+" },
          { label: "Team Members", value: "100+" },
        ].map((stat) => (
          <Card key={stat.label} className="text-center p-6">
            <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
            <p className="text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Contact Information */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Building2 className="text-primary" />
                <span>Our Store Inc.</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-primary" />
                <span>123 Commerce Street, Business City, 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-primary" />
                <span>contact@ourstore.com</span>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Business Hours</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Monday - Friday</div>
                <div>9:00 AM - 6:00 PM</div>
                <div>Saturday</div>
                <div>10:00 AM - 4:00 PM</div>
                <div>Sunday</div>
                <div>Closed</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <div className="flex flex-wrap gap-2 justify-center">
        {[
          "ISO Certified",
          "Secure Payments",
          "Fast Delivery",
          "24/7 Support",
        ].map((cert) => (
          <Badge key={cert} variant="secondary">
            {cert}
          </Badge>
        ))}
      </div>
    </div>
  );
}
