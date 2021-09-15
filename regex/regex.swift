import Foundation
let test_string = "hat"
let range = NSRange(location: 0, length: test_string.utf16.count)
let regex = try! NSRegularExpression(pattern: "[a-z]at")

//print(regex.firstMatch(in: test_string, options: [], range: range) ?? "nothing found")
regex.firstMatch(in: test_string, options: [], range: range)
print("howdy")

    
