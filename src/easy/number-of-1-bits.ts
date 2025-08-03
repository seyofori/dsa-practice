import assertTest from "../assert-test"

/**
 * Number of 1 Bits (#191)
 *
 * Write a function that takes the binary representation of an unsigned integer
 * and returns the number of '1' bits it has (also known as the Hamming weight).
 *
 * Time Complexity: O(1) - always 32 bits
 * Space Complexity: O(1)
 */
function hammingWeight(n: number): number {
  // TODO: Implement the solution
  return 0
}

// Test cases
assertTest(hammingWeight(0b00000000000000000000000000001011), 3, "Example 1")
assertTest(hammingWeight(0b00000000000000000000000010000000), 1, "Example 2")
assertTest(hammingWeight(0b11111111111111111111111111111101), 31, "Example 3")
assertTest(hammingWeight(0), 0, "All zeros")
assertTest(hammingWeight(0b11111111111111111111111111111111), 32, "All ones")
assertTest(hammingWeight(1), 1, "Single bit")
assertTest(hammingWeight(2), 1, "Second bit")
assertTest(hammingWeight(3), 2, "Two bits")
assertTest(hammingWeight(4), 1, "Third bit")
assertTest(hammingWeight(7), 3, "Three consecutive bits")
assertTest(hammingWeight(8), 1, "Fourth bit")
assertTest(hammingWeight(15), 4, "Four consecutive bits")
assertTest(hammingWeight(16), 1, "Fifth bit")
assertTest(
  hammingWeight(0b01010101010101010101010101010101),
  16,
  "Alternating pattern",
)
assertTest(
  hammingWeight(0b10101010101010101010101010101010),
  16,
  "Reverse alternating",
)
assertTest(
  hammingWeight(0b11110000111100001111000011110000),
  16,
  "Block pattern",
)
assertTest(
  hammingWeight(0b00001111000011110000111100001111),
  16,
  "Reverse block pattern",
)
assertTest(hammingWeight(0b11000000000000000000000000000011), 4, "Edges only")
assertTest(hammingWeight(0b00000000000000001111111111111111), 16, "Half filled")
assertTest(
  hammingWeight(0b11111111111111110000000000000000),
  16,
  "Other half filled",
)
assertTest(hammingWeight(0b10000000000000000000000000000001), 2, "Both ends")
assertTest(hammingWeight(0b00000001000000010000000100000001), 4, "Sparse bits")
assertTest(
  hammingWeight(0b11111110111111101111111011111110),
  28,
  "Dense pattern",
)
assertTest(hammingWeight(0b00000000000000000000000011111111), 8, "Last byte")
assertTest(hammingWeight(0b11111111000000000000000000000000), 8, "First byte")
assertTest(hammingWeight(0b00000000111111110000000000000000), 8, "Middle byte")
assertTest(
  hammingWeight(0b10101010000000001010101000000000),
  8,
  "Two sparse bytes",
)
assertTest(
  hammingWeight(0b11001100110011001100110011001100),
  16,
  "Repeating nibbles",
)
assertTest(
  hammingWeight(0b00110011001100110011001100110011),
  16,
  "Reverse repeating nibbles",
)
assertTest(
  hammingWeight(0b11110000111100001111000011110000),
  16,
  "Nibble blocks",
)
assertTest(
  hammingWeight(0b00011000001100000110000001100000),
  8,
  "Scattered pattern",
)
assertTest(hammingWeight(0b11100000000000000000000000000111), 6, "Edge pattern")
assertTest(
  hammingWeight(0b10000001100000011000000110000001),
  8,
  "Complex pattern",
)
assertTest(hammingWeight(42), 3, "Answer to everything")
assertTest(hammingWeight(255), 8, "Max byte value")
assertTest(hammingWeight(256), 1, "Just over byte")
assertTest(hammingWeight(511), 9, "Nine bits")
assertTest(hammingWeight(1024), 1, "Power of 2")
assertTest(hammingWeight(1023), 10, "All bits up to 10")
assertTest(hammingWeight(65535), 16, "Max 16-bit value")

