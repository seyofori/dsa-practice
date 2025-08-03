// Utility assert
export default function assertTest(actual: any, expected: any, message: string) {
  const pass = JSON.stringify(actual) === JSON.stringify(expected)
  if (!pass) {
    console.error(
      `❌ ${message} | Expected: ${JSON.stringify(
        expected
      )}, Got: ${JSON.stringify(actual)}`
    )
  } else {
    console.log(`✅ ${message}`)
  }
}
