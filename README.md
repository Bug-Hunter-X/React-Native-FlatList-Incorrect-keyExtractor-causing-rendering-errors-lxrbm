# React Native FlatList - Incorrect keyExtractor

This repository demonstrates a common issue in React Native's FlatList component where an incorrectly implemented `keyExtractor` causes rendering problems when the data changes.  The problem and its solution are explained below.

## Problem

When updating data in a FlatList, if the `keyExtractor` doesn't provide a unique key for each item, the list might not re-render correctly.  This could lead to unexpected visual results, such as missing items, duplicate items, or incorrect item positioning.

## Solution

The solution involves correctly implementing the `keyExtractor` function to provide a unique key for every item in the data array.  Using the item's `id` (or a unique property) is a common and effective solution.

## How to run this example:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npx react-native run-android` or `npx react-native run-ios`.