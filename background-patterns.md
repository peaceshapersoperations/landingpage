# Background Patterns Collection

A collection of subtle background patterns for web design. All patterns use inline SVG data URLs with low opacity for subtle texture without overwhelming content.

## Usage

Copy any pattern below and use it in your React component:

```jsx
<div
  className="absolute inset-0"
  style={{
    backgroundImage: `url("PASTE_SVG_URL_HERE")`,
  }}
/>
```

---

## 1. Dot Pattern
Small circles arranged in an offset grid for a subtle, modern texture.

```jsx
style={{
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3Ccircle cx='12' cy='2' r='1'/%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='17' cy='7' r='1'/%3E%3Ccircle cx='2' cy='12' r='1'/%3E%3Ccircle cx='12' cy='12' r='1'/%3E%3Ccircle cx='7' cy='17' r='1'/%3E%3Ccircle cx='17' cy='17' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
}}
```

---

## 2. Diagonal Lines Pattern
Fine diagonal lines creating a modern, dynamic texture.

```jsx
style={{
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5' stroke-opacity='0.03'%3E%3Cpath d='M0 40L40 0M-5 35L35 -5M5 45L45 5'/%3E%3C/g%3E%3C/svg%3E")`,
}}
```

---

## 3. Hexagonal Pattern
Subtle honeycomb/hexagonal mesh for a technical, modern feel.

```jsx
style={{
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5' stroke-opacity='0.05'%3E%3Cpath d='M30 5L50 17.5V42.5L30 55L10 42.5V17.5Z'/%3E%3C/g%3E%3C/svg%3E")`,
}}
```

---

## 4. Wave Pattern
Gentle wave lines for an organic, flowing feel.

```jsx
style={{
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5' stroke-opacity='0.05'%3E%3Cpath d='M0 10Q25 0 50 10T100 10'/%3E%3Cpath d='M0 15Q25 5 50 15T100 15'/%3E%3C/g%3E%3C/svg%3E")`,
}}
```

---

## 5. Crosshatch Pattern
Fine intersecting diagonal lines creating a classic fabric-like texture.

```jsx
style={{
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.3' stroke-opacity='0.04'%3E%3Cpath d='M0 0L20 20M0 20L20 0'/%3E%3C/g%3E%3C/svg%3E")`,
}}
```

---

## 6. Triangle Pattern
Geometric triangle tessellation for an architectural, modern feel.

```jsx
style={{
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5' stroke-opacity='0.05'%3E%3Cpath d='M20 5L35 30H5Z'/%3E%3Cpath d='M0 15L15 40H-15Z'/%3E%3Cpath d='M40 15L55 40H25Z'/%3E%3C/g%3E%3C/svg%3E")`,
}}
```

---

## Customization Tips

### Adjusting Opacity
Change the `fill-opacity` or `stroke-opacity` values:
- `0.02` = Very subtle
- `0.05` = Default subtle
- `0.08` = More visible
- `0.12` = Quite visible

### Changing Colors
Replace `%23000000` (black) with:
- `%23ffffff` = White
- `%23ff0000` = Red
- `%230080ff` = Blue
- Use hex color codes with `%23` prefix

### Adjusting Size
Modify the `width` and `height` attributes in the SVG:
- Smaller values = Denser pattern
- Larger values = More spread out

### Stroke Width
For line patterns, adjust `stroke-width`:
- `0.3` = Very thin lines
- `0.5` = Default thin lines  
- `1.0` = Medium lines
- `1.5` = Thick lines

## Performance Notes

- These patterns use inline SVG data URLs for optimal performance
- All patterns are lightweight and won't impact page load times
- Use with `absolute inset-0` and proper z-index layering
- Consider adding `pointer-events-none` if patterns should be non-interactive
