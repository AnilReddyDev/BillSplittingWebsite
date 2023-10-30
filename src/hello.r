user_number <- 2563
if (!is.na(user_number)) {
  sprintf("You entered %d", user_number)
} else {
  cat("Invalid input. Please enter a numeric value.")
}