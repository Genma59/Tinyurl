#include <iostream>
#include <string>
#include <cstdlib>
#include <ctime>

// Function to generate a random short URL
std::string generateShortURL() {
    const char charset[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const int length = 6; // Short URL length
    std::string shortURL;

    for (int i = 0; i < length; ++i) {
        shortURL += charset[rand() % (sizeof(charset) - 1)];
    }

    return shortURL;
}

int main() {
    // Seed random number generator
    srand(static_cast<unsigned>(time(0)));

    // Input long URL
    std::string longURL;
    std::cout << "Enter a long URL: ";
    std::getline(std::cin, longURL);

    // Generate short URL
    std::string shortURL = generateShortURL();

    // Output result
    std::cout << "Short URL: https://tinyurl.com/" << shortURL << std::endl;

    return 0;
}



