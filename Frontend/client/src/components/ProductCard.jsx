/* eslint-disable no-unused-vars */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

export default function ProductCard() {
  const [amount, setamount] = useState(350);

  // handlePayment Function
  const handlePayment = async () => {
      try {
          const res = await fetch(`${({}).VITE_BACKEND_HOST_URL}/api/payment/order`, {
              method: "POST",
              headers: {
                  "content-type": "application/json"
              },
              body: JSON.stringify({
                  amount
              })
          });

          const data = await res.json();
          console.log(data);
      } catch (error) {
          console.log(error);
      }
  }
  return (
      <Card className="mt-6 w-96 bg-[#222f3e] text-white">
          {/* CardHeader */}
          <CardHeader color="" className="relative h-96 bg-[#2C3A47]">
              {/* Image  */}
              <img
                  src="https://codeswear.nyc3.cdn.digitaloceanspaces.com/tshirts/pack-of-five-plain-tshirt-white/1.webp"
                  alt="card-image"
              />
          </CardHeader>

          {/* CardBody */}
          <CardBody>
              {/* Typography For Title */}
              <Typography variant="h5" className="mb-2">
                  My First Product
              </Typography>

              {/* Typography For Price  */}
              <Typography>
                  ₹350 <span className=" line-through">₹699</span>
              </Typography>
          </CardBody>

          {/* CardFooter  */}
          <CardFooter className="pt-0">
              {/* Buy Now Button  */}
              <Button onClick={handlePayment} className="w-full bg-[#1B9CFC]">Buy Now</Button>
          </CardFooter>
      </Card>
  );
}