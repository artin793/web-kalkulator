export function fakultet(n) {
    if (n < 2) {
        return 1
    }

    return n * fakultet(n - 1)
}