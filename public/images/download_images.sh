#!/bin/bash
images=(
  "https://twincityendo.com.sg/wp-content/themes/twincity/assets/images/twin-city-dental.svg"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/Asset-3@2x-1.png"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/Asset-6@2x-1.png"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/Asset-7@2x-1.png"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/Asset-8@2x-2.png"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/Asset-9@2x-2.png"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/icon-1.png"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/icon-2.png"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/icon-3.png"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/icon-4.png"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/icon-5.png"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/icon-6.png"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/190123-3226-CP-811-080319-s.png"
  "https://twincityendo.com.sg/wp-content/uploads/2021/09/aae-hires-logo.png"
  "https://twincityendo.com.sg/wp-content/uploads/2023/01/TCE-Doctor-Dr-Gerald-Lim.jpg"
  "https://twincityendo.com.sg/wp-content/uploads/2023/07/Twin-City-Dr-Surein-Angamuthu.jpg"
  "https://twincityendo.com.sg/wp-content/uploads/2024/08/Our-Doctors.png"
  "https://twincityendo.com.sg/wp-content/uploads/2022/06/Dr-Renee-Mircoscope-3.jpg"
)

for url in "${images[@]}"; do
  filename=$(basename "$url")
  echo "Downloading: $filename"
  curl -sL -o "$filename" "$url"
done

echo "All images downloaded!"
