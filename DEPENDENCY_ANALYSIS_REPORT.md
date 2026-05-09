# Comprehensive Dependency Analysis Report
**Generated:** May 9, 2026

---

## 1. PROJECT ROUTING STRUCTURE

### Active Routes
| Route | Page Component | Status |
|-------|---|---|
| `/` | `Index.tsx` | ✅ Active |
| `/about` | `AboutPage.tsx` | ✅ Active |
| `/services` | `ServicesPage.tsx` | ✅ Active |
| `/packages` | `PackagesPage.tsx` | ✅ Active |
| `/umrah` | `UmrahPage.tsx` | ✅ Active |
| `/contact` | `ContactPage.tsx` | ✅ Active |
| `/customize` | `CustomizePage.tsx` | ✅ Active |
| `*` (404) | `NotFound.tsx` | ✅ Active |

---

## 2. COMPONENT DEPENDENCY MAPPING

### 2.1 NAVBAR.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`, `react-router-dom`
- UI Components: `Button`
- Assets: `map-logo.webp`

**Dependencies:** None (core component)
**Exported to:** ALL pages (used globally)
**Status:** ✅ USED

---

### 2.2 HERO.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`, `react-router-dom`
- UI Components: `Button`
- Assets: `hero-static.webp`, `Moin.webp`, `Mukarram.webp`, `Farooq.webp`, `Sufiyan.webp`

**Dependencies:** None
**Exported to:** `Index.tsx`
**Usage:** Main hero section on homepage
**Status:** ✅ USED

---

### 2.3 FOOTER.tsx
**Imports:**
- External: `lucide-react`
- UI Components: None
- Assets: None

**Dependencies:** None
**Exported to:** ALL pages
**Status:** ✅ USED - Global component

---

### 2.4 FLYING_PLANE.tsx
**Imports:**
- External: `lucide-react`
- UI Components: None

**Dependencies:** None
**Exported to:** ALL pages
**Status:** ✅ USED - Decorative element on every page

---

### 2.5 ABOUT.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`, `react-router-dom`
- UI Components: `Button`
- Assets: `about-travel.webp`
- Hooks: Uses `useRef`, `useInView` from framer-motion, `useNavigate` from react-router-dom

**Dependencies:** None (standalone)
**Exported to:** `AboutPage.tsx`
**Status:** ✅ USED

---

### 2.6 CONTACT.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`
- UI Components: `Button`, `Input`, `Textarea`
- Hooks: `useToast` from `@/hooks/use-toast`

**Dependencies:** None
**Exported to:** `ContactPage.tsx`
**Status:** ✅ USED
**Features:** WhatsApp form integration

---

### 2.7 HOMEABOUTPREVIEW.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`, `react-router-dom`
- UI Components: `Button`

**Dependencies:** None
**Exported to:** `Index.tsx`
**Status:** ✅ USED - Home page section

---

### 2.8 HOMESERVICESPREVIEW.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`, `react-router-dom`
- UI Components: `Button`

**Dependencies:** None
**Exported to:** `Index.tsx`
**Status:** ✅ USED - Home page section

---

### 2.9 HOMEPACKAGESPREVIEW.tsx
**Imports:**
- External: All imports commented out (entire component is commented)
- UI Components: All commented

**Dependencies:** None
**Exported to:** `Index.tsx`
**Status:** ⚠️ **NOT USED - FULLY COMMENTED OUT**
**Note:** Component is imported in `Index.tsx` but commented out in JSX

---

### 2.10 HOMERAMADANPREVIEW.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`, `react-router-dom`
- UI Components: `Button`
- Assets: `kaaba-makkah.webp`, `madinah-nabawi.webp`

**Dependencies:** None
**Exported to:** `Index.tsx`
**Status:** ✅ USED - Home page section

---

### 2.11 HOMETRUSTTBANNER.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`, `react-router-dom`
- UI Components: `Button`
- Assets: Multiple testimonial images (Mukarram, Farooq, Sufiyan, Mike, Moin, Usama)

**Dependencies:** None
**Exported to:** `Index.tsx`
**Status:** ✅ USED - Home page section

---

### 2.12 HOMECTA.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`, `react-router-dom`
- UI Components: `Button`

**Dependencies:** None
**Exported to:** `Index.tsx`
**Status:** ✅ USED - Home page CTA section

---

### 2.13 PACKAGES.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`, `react-router-dom`
- UI Components: `Button`

**Dependencies:** None
**Exported to:** `PackagesPage.tsx`
**Status:** ✅ USED

---

### 2.14 SERVICES.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`, `react-router-dom`, `useState`, `useEffect`
- UI Components: `Button`

**Dependencies:** None
**Exported to:** `ServicesPage.tsx`
**Status:** ✅ USED
**Note:** Contains both services AND packages sections within one component

---

### 2.15 TESTIMONIALS.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`
- UI Components: None

**Dependencies:** None
**Exported to:** `PackagesPage.tsx`
**Status:** ✅ USED

---

### 2.16 RAMDANUMRAHSECTION.tsx
**Imports:**
- External: `framer-motion`, `lucide-react`, `react-router-dom`
- UI Components: `Button`
- Assets: `kaaba-makkah.webp`, `madinah-nabawi.webp`

**Dependencies:** None
**Exported to:** `UmrahPage.tsx`
**Status:** ✅ USED

---

### 2.17 NAVLINK.tsx
**Imports:**
- External: `react-router-dom`, `forwardRef` from react
- Utils: `cn` from `@/lib/utils`

**Dependencies:** None
**Exported to:** NOT USED ANYWHERE ⚠️
**Status:** ❌ **UNUSED COMPONENT** - Never imported in any file

---

## 3. PAGE DEPENDENCY MAPPING

### 3.1 INDEX.tsx (Home Page)
**Imports:**
```
- Navbar (✅ USED)
- Hero (✅ USED)
- HomeAboutPreview (✅ USED)
- HomeServicesPreview (✅ USED)
- HomePackagesPreview (⚠️ IMPORTED BUT COMMENTED IN JSX)
- HomeTrustBanner (✅ USED)
- HomeRamadanPreview (✅ USED)
- HomeCTA (✅ USED)
- Footer (✅ USED)
- FlyingPlane (✅ USED)
```
**Status:** All used except HomePackagesPreview

---

### 3.2 ABOUTPAGE.tsx
**Imports:**
```
- Navbar (✅ USED)
- About (✅ USED)
- Footer (✅ USED)
- FlyingPlane (✅ USED)
```
**Status:** All used

---

### 3.3 CONTACTPAGE.tsx
**Imports:**
```
- Navbar (✅ USED)
- Contact (✅ USED)
- Footer (✅ USED)
- FlyingPlane (✅ USED)
```
**Status:** All used

---

### 3.4 SERVICESPAGE.tsx
**Imports:**
```
- Navbar (✅ USED)
- Services (✅ USED)
- Footer (✅ USED)
- FlyingPlane (✅ USED)
```
**Status:** All used

---

### 3.5 PACKAGESPAGE.tsx
**Imports:**
```
- Navbar (✅ USED)
- Packages (✅ USED)
- Testimonials (✅ USED)
- Footer (✅ USED)
- FlyingPlane (✅ USED)
```
**Status:** All used

---

### 3.6 UMRAHPAGE.tsx
**Imports:**
```
- Navbar (✅ USED)
- RamadanUmrahSection (✅ USED)
- Footer (✅ USED)
- FlyingPlane (✅ USED)
```
**Status:** All used

---

### 3.7 CUSTOMIZEPAGE.tsx
**Imports:**
```
- Navbar (✅ USED)
- Footer (✅ USED)
- FlyingPlane (✅ USED)
- UI Components: Button, Input, Textarea, Tooltip, TooltipTrigger, TooltipContent, TooltipProvider
- Icons: Building2, Heart, Users, Check, Sparkles, Send, Medal, Moon, LayoutPanelLeft
- Hooks: useToast
- ALL USED in form
```
**Status:** All used

---

### 3.8 NOTFOUND.tsx
**Imports:**
```
- useLocation (✅ USED)
- useEffect (✅ USED)
```
**Status:** All used

---

## 4. UNUSED IMPORTS BY FILE

### 4.1 HERO.tsx
- **Status:** ✅ No unused imports detected

### 4.2 NAVBAR.tsx
- **Status:** ✅ No unused imports detected

### 4.3 ABOUT.tsx
- **Status:** ✅ No unused imports detected

### 4.4 HOMEABOUTPREVIEW.tsx
- **Status:** ✅ No unused imports detected

### 4.5 FOOTER.tsx
- **Status:** ✅ No unused imports detected

### 4.6 CONTACT.tsx
- **Status:** ✅ No unused imports detected

### 4.7 CUSTOMIZEPAGE.tsx
- **Status:** ✅ No unused imports detected

### 4.8 HOMESERVICESPREVIEW.tsx
- **Status:** ✅ No unused imports detected

### 4.9 HOMERAMADANPREVIEW.tsx
- **Status:** ✅ No unused imports detected

### 4.10 HOMETRUSTTBANNER.tsx
- **Status:** ✅ No unused imports detected

### 4.11 HOMECTA.tsx
- **Status:** ✅ No unused imports detected

### 4.12 PACKAGES.tsx
- **Status:** ✅ No unused imports detected

### 4.13 SERVICES.tsx
- **Status:** ✅ No unused imports detected

### 4.14 TESTIMONIALS.tsx
- **Status:** ✅ No unused imports detected

### 4.15 RAMDANUMRAHSECTION.tsx
- **Status:** ✅ No unused imports detected

### 4.16 APP.tsx
**Unused Imports:**
```typescript
❌ useNavigate - imported but never used
   (The HandleRedirect component that uses it is commented out)
```
**Recommendation:** Remove unused import or uncomment HandleRedirect

---

## 5. COMMENTED-OUT CODE ANALYSIS

### 5.1 APP.tsx (lines 18-28)
**Content:** `HandleRedirect` component
```typescript
// const HandleRedirect = () => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const path = params.get("p");
//     if (path) {
//       navigate(path);
//     }
//   }, []);
//   return null;
// };
```
**Status:** ⚠️ Commented out, referenced in lines 45 and 47
**Impact:** Causes `useNavigate` import to be unused

---

### 5.2 APP.tsx (line 45)
**Content:** `<HandleRedirect />` component call
**Status:** ⚠️ Commented out

---

### 5.3 APP.tsx (line 47)
**Content:** `<HashRouter>` wrapper
**Status:** ⚠️ Commented out (using BrowserRouter instead)

---

### 5.4 HERO.tsx (line 49)
**Content:** Commented paragraph about trip planning
```typescript
// <p className="text-md md:text-xl lg:text-xl 2xl:text-2xl text-white/80 w-[80%] text-center">
//   Our expert travel agency provide stress-free visa processing & other all travel documentation so you can travel with comfort and trust.
// </p>
```
**Status:** ⚠️ Duplicate content (active version on line 47)

---

### 5.5 HERO.tsx (line 59)
**Content:** Commented SVG alt text reference
```typescript
// {String.fromCharCode(64 + i)}
```
**Status:** Minor - cosmetic comment

---

### 5.6 HOMEPACKAGESPREVIEW.tsx (entire file)
**Content:** FULLY COMMENTED component
**Status:** ⚠️ **CRITICAL** - Entire component is commented out, but imported in Index.tsx JSX (line 18)

---

### 5.7 INDEX.tsx (line 18)
**Content:** 
```typescript
{/* <HomePackagesPreview /> */}
```
**Status:** ⚠️ Component commented in JSX but imported in line 5

---

---

## 6. HOOKS & UTILITIES ANALYSIS

### 6.1 HOOKS (src/hooks/)

#### use-toast.ts
- **Status:** ✅ USED
- **Used in:** Contact.tsx, CustomizePage.tsx
- **References:** 2 files

#### use-mobile.tsx (exported as useIsMobile)
- **Status:** ❌ **UNUSED**
- **Not imported anywhere in the codebase**
- **Recommendation:** Remove if not needed, or implement responsive mobile menu using it

---

### 6.2 UTILS (src/lib/)

#### utils.ts (exports `cn` function)
- **Status:** ✅ USED
- **Used in:** NavLink.tsx
- **Purpose:** Utility for combining classnames (clsx + tailwind-merge)

---

---

## 7. COMPONENT USAGE SUMMARY

### Components Used on Each Page

| Page | Components Used |
|------|---|
| **Index** | Navbar, Hero, HomeAboutPreview, HomeServicesPreview, HomeTrustBanner, HomeRamadanPreview, HomeCTA, Footer, FlyingPlane |
| **AboutPage** | Navbar, About, Footer, FlyingPlane |
| **ContactPage** | Navbar, Contact, Footer, FlyingPlane |
| **ServicesPage** | Navbar, Services, Footer, FlyingPlane |
| **PackagesPage** | Navbar, Packages, Testimonials, Footer, FlyingPlane |
| **UmrahPage** | Navbar, RamadanUmrahSection, Footer, FlyingPlane |
| **CustomizePage** | Navbar, Footer, FlyingPlane |
| **NotFound** | (Standalone page, no component imports) |

---

## 8. COMPONENTS NOT USED ON ANY PAGE

| Component | Status | Reason |
|---|---|---|
| **HomePackagesPreview.tsx** | ❌ NOT USED | Imported but commented out in Index.tsx JSX |
| **NavLink.tsx** | ❌ NOT USED | Never imported in any file |

---

## 9. UNUSED ASSETS REFERENCE

All imported assets appear to be USED:
- ✅ Logo: `map-logo.webp`
- ✅ Hero image: `hero-static.webp`
- ✅ About image: `about-travel.webp`
- ✅ Holy site images: `kaaba-makkah.webp`, `madinah-nabawi.webp`
- ✅ Team photos: `Moin.webp`, `Mukarram.webp`, `Farooq.webp`, `Sufiyan.webp`, `Mike.webp`, `Usama.webp`

---

## 10. CRITICAL FINDINGS & RECOMMENDATIONS

### 🔴 CRITICAL ISSUES

1. **Unused Component: NavLink.tsx**
   - Location: `src/components/NavLink.tsx`
   - Status: Never imported or used anywhere
   - Action: REMOVE if not planned for future use, or IMPLEMENT if needed
   - Effort: Delete file

2. **Unused Hook: use-mobile.tsx**
   - Location: `src/hooks/use-mobile.tsx`
   - Status: Defined but never imported
   - Action: IMPLEMENT for responsive design OR REMOVE
   - Effort: Medium - requires mobile menu implementation

3. **Unused Import: useNavigate in App.tsx**
   - Location: App.tsx line 4
   - Reason: Associated HandleRedirect component is commented out
   - Action: REMOVE import OR UNCOMMENT component
   - Effort: 1 line change

---

### ⚠️ MEDIUM PRIORITY ISSUES

1. **HomePackagesPreview Component**
   - Location: `src/components/HomePackagesPreview.tsx` (fully commented) & `src/pages/Index.tsx` (imported & commented)
   - Status: 94 lines of commented JSX code in component, imported but not rendered
   - Action: REMOVE commented import from Index.tsx and consider deleting component file OR uncomment if feature should be restored
   - Effort: 1 line removal + optional file deletion

2. **Commented Code in HERO.tsx**
   - Location: Line 49 (duplicate paragraph)
   - Status: Duplicate content (active version exists)
   - Action: Remove commented line
   - Effort: 5 lines

3. **Unused Components in Services.tsx**
   - Note: Services.tsx contains both services AND packages - consider if this should be two components

---

### ✅ CODE HEALTH SUMMARY

| Metric | Value |
|--------|-------|
| Total Component Files | 17 |
| Used Components | 15 (88%) |
| Unused Components | 2 (12%) |
| Pages | 8 |
| Unused Hooks | 1 |
| Unused Utilities | 0 |
| Files with Unused Imports | 1 (App.tsx) |
| Fully Commented Components | 1 (HomePackagesPreview) |

---

## 11. DEPENDENCY GRAPH

```
App.tsx
├── Providers & Configuration
├── Lazy Routes
└── All Pages
    ├── Index (/)
    │   ├── Navbar
    │   ├── Hero
    │   ├── HomeAboutPreview
    │   ├── HomeServicesPreview
    │   ├── HomePackagesPreview [COMMENTED]
    │   ├── HomeTrustBanner
    │   ├── HomeRamadanPreview
    │   ├── HomeCTA
    │   ├── Footer
    │   └── FlyingPlane
    │
    ├── AboutPage (/about)
    │   ├── Navbar
    │   ├── About
    │   ├── Footer
    │   └── FlyingPlane
    │
    ├── ContactPage (/contact)
    │   ├── Navbar
    │   ├── Contact → useToast hook
    │   ├── Footer
    │   └── FlyingPlane
    │
    ├── ServicesPage (/services)
    │   ├── Navbar
    │   ├── Services
    │   ├── Footer
    │   └── FlyingPlane
    │
    ├── PackagesPage (/packages)
    │   ├── Navbar
    │   ├── Packages
    │   ├── Testimonials
    │   ├── Footer
    │   └── FlyingPlane
    │
    ├── UmrahPage (/umrah)
    │   ├── Navbar
    │   ├── RamadanUmrahSection
    │   ├── Footer
    │   └── FlyingPlane
    │
    ├── CustomizePage (/customize)
    │   ├── Navbar
    │   ├── Footer
    │   ├── FlyingPlane
    │   └── useToast hook
    │
    └── NotFound (404)
        └── Standalone
```

---

## 12. RECOMMENDATIONS FOR CLEANUP

### Phase 1: Quick Wins (15 minutes)
1. Remove `useNavigate` import from App.tsx
2. Remove commented line 49 from Hero.tsx
3. Remove HomePackagesPreview import from Index.tsx

### Phase 2: Component Cleanup (30 minutes)
1. Delete `NavLink.tsx` (unused component)
2. Delete `HomePackagesPreview.tsx` (fully commented, not used)
3. Verify no other files reference these components

### Phase 3: Hook Implementation (1-2 hours)
1. Implement mobile responsive menu using `useIsMobile` hook, OR
2. Delete `use-mobile.tsx` if mobile-specific features aren't planned

### Phase 4: Optional Refactoring
1. Split Services.tsx into separate Service and Package components
2. Add more descriptive component JSDoc comments
3. Create an index.ts file to re-export all components

---

## 13. FILE ORGANIZATION

```
✅ Well organized structure:
src/
├── components/
│   ├── [Main feature components]
│   └── ui/ [shadcn UI components - all used]
├── pages/ [All 8 pages properly structured]
├── hooks/ [use-toast.ts USED, use-mobile.tsx UNUSED]
├── lib/ [utils.ts USED]
├── assets/ [All images USED]
└── App.tsx & main.tsx [Entry points]
```

---

## CONCLUSION

The codebase is generally **clean and well-organized** with:
- ✅ 15/17 components actively used
- ✅ All pages properly structured
- ✅ No circular dependencies detected
- ✅ Assets efficiently used
- ⚠️ 2 unused components that should be removed
- ⚠️ 1 unused hook that needs implementation or removal
- ⚠️ Minor commented code that should be cleaned up

**Priority:** Remove the 2 unused components and 1 unused import to improve code clarity.

