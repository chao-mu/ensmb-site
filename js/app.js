$(function () {
  // Hypothetically this is to stop bots scraping phone numbers
  // but honestly, I don't know how they scrape
  // and I can think of a thousand ways this sort of obfuscation would be circumvented
  var num = "617X767X1606".replace(/X/g, "-");
  var phone_link = $(".booking-number");
  phone_link.attr("href", "tel:" + num);
  phone_link.text(num);
});
