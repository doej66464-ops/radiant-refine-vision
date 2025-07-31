import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, MapPin, Calendar, Clock, Percent, Tag } from "lucide-react";

const EventCouponForm = () => {
  const [code, setCode] = useState("PERCENTAGE1");
  const [maxUsage, setMaxUsage] = useState("Unlimited");
  const [discount, setDiscount] = useState("0");
  const [variableDiscount, setVariableDiscount] = useState(true);
  const [forever, setForever] = useState(true);
  const [unlimitedDuration, setUnlimitedDuration] = useState(true);
  const [duration, setDuration] = useState("8");
  const [locations] = useState(["Building-1, Ecospace", "Building-2, Ecospace"]);
  
  const weeklyDiscounts = [
    { day: "Mon", value: "0" },
    { day: "Tue", value: "10" },
    { day: "Wed", value: "10.5" },
    { day: "Thu", value: "10.5" },
    { day: "Fri", value: "10" },
    { day: "Sat", value: "10" },
    { day: "Sun", value: "10" }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg border-border">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Tag className="h-6 w-6" />
                <div>
                  <h1 className="text-2xl font-bold">Event Coupon</h1>
                  <p className="text-primary-foreground/80 text-sm">Updated by: Sandeep Koduri</p>
                </div>
              </div>
              <div className="bg-primary-foreground/20 px-3 py-1 rounded-full">
                <span className="text-sm font-medium">%</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8 space-y-8">
            {/* Code and Max Usage Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label htmlFor="code" className="text-base font-semibold flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Code
                </Label>
                <Input
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="h-12 text-lg font-mono bg-muted border-2"
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="maxUsage" className="text-base font-semibold">Max Usage</Label>
                <div className="relative">
                  <Input
                    id="maxUsage"
                    value={maxUsage}
                    onChange={(e) => setMaxUsage(e.target.value)}
                    className="h-12 text-lg bg-muted border-2"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-2">
                    <Badge variant="outline" className="text-xs">Unlimited Usage</Badge>
                    <Badge variant="outline" className="text-xs">Per Day</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Discount Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <Percent className="h-4 w-4" />
                  Discount
                </Label>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="variableDiscount" 
                    checked={variableDiscount}
                    onCheckedChange={(checked) => setVariableDiscount(checked === true)}
                  />
                  <Label htmlFor="variableDiscount" className="text-sm font-medium">
                    Variable Discount
                  </Label>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative w-32">
                  <Input
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className="h-12 text-lg text-center font-bold bg-accent border-2"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground font-bold">%</span>
                </div>
              </div>
            </div>

            {/* Weekly Discount Schedule */}
            {variableDiscount && (
              <div className="space-y-4">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Weekly Schedule
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {weeklyDiscounts.map((item) => (
                    <div key={item.day} className="text-center space-y-2">
                      <Label className="text-sm font-medium text-muted-foreground">{item.day}</Label>
                      <div className="relative">
                        <Input
                          value={item.value}
                          className="h-10 text-center font-semibold bg-accent border-2"
                          readOnly
                        />
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Duration Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-semibold flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Booking Duration
                </Label>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="forever" 
                    checked={forever}
                    onCheckedChange={(checked) => setForever(checked === true)}
                  />
                  <Label htmlFor="forever" className="text-sm font-medium">
                    Forever
                  </Label>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-24">
                  <Input
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="h-12 text-lg text-center font-bold bg-accent border-2"
                    disabled={forever}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="unlimitedDuration" 
                    checked={unlimitedDuration}
                    onCheckedChange={(checked) => setUnlimitedDuration(checked === true)}
                  />
                  <Label htmlFor="unlimitedDuration" className="text-sm font-medium">
                    Unlimited Duration
                  </Label>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="space-y-4">
              <Label className="text-base font-semibold flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </Label>
              <div className="flex flex-wrap gap-2">
                {locations.map((location, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-2 text-sm flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    {location}
                    <button className="ml-1 hover:bg-destructive/20 rounded-full p-0.5">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                <Button variant="outline" size="sm" className="h-8 px-3 text-sm">
                  Add location...
                </Button>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-end pt-6 border-t border-border">
              <Button variant="destructive" size="lg" className="px-8">
                Deactivate
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventCouponForm;