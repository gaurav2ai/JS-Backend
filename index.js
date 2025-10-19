require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "personal": {
    "fullName": "Gaurav Arvind Chaubey",
    "preferredName": "Gaurav",
    "dob": "2000-03-04T23:27:00+05:30",
    "birthplace": "Virar, Mumbai, Maharashtra, India"
  },
  "family": {
    "wife": {
      "name": "Shivangi",
      "dob": "2001-09-26T19:30:00+05:30",
      "birthplace": "Banaras (Varanasi), India"
    },
    "father": {
      "name": "Arvind Harivansh Chaubey",
      "dob": "1964-08-08T14:44:00+05:30",
      "birthplace": "Mumbai, India",
      "healthConcerns": ["BP", "Diabetes (sugar)", "Thyroid"],
      "businessStatus": "Facing major business loss since 2011"
    }
  },
  "employmentAndEducation": {
    "currentFirm": {
      "name": "CRDTLIN",
      "type": "Loan Agency",
      "notes": "User is associated with CRDTLIN for website and product work"
    },
    "applyingFor": ["Python Developer", "Data Analyst", "Web Developer"],
    "resume": {
      "usesLatexTemplate": true,
      "customTemplate": true
    }
  },
  "finances": {
    "monthlyIncomeINR": { "min": 30000, "max": 35000 },
    "monthlyInvestibleINR": 75000,
    "financialGoals": {
      "targetNetWorthINR": { "min": 50000000, "max": 100000000 },
      "targetPassiveMonthlyINR": { "min": 400000, "max": 500000 }
    },
    "interests": ["SIPs", "Stocks", "Bitcoin", "Real Estate"],
    "wealthTracker": "monthly"
  },
  "webAndDevPreferences": {
    "primaryStyling": "Tailwind CSS",
    "prefersBootstrapForSomeUI": true,
    "hostingResearch": {
      "doingDeploymentResearch": true,
      "wantsHumanLikeReport": true
    },
    "tools": {
      "editor": "Replit",
      "domainProvider": "GoDaddy",
      "wordpressSite": {
        "domain": "crdtlin",
        "wantsNewSite": true,
        "zeroKnowledgeWordPress": true
      }
    },
    "jsKnowledge": "some",
    "wantsFrontendFeatures": {
      "heroCarousel": true,
      "pricingPageImportant": true,
      "responsiveHamburgerMenu": true
    },
    "emiCalculator": {
      "required": true,
      "creditCardRule": "Monthly EMI = amount × 0.05 (no tenure required)",
      "showGraphs": true,
      "yearWiseBreakdown": true
    }
  },
  "learningGoalsAndPreferences": {
    "jsLearning": {
      "arraysFromZeroToPro": true,
      "executionContextDeep": true,
      "DOMandBOM": true,
      "fetchAPI": true,
      "setTimeout_setInterval_tests": true,
      "formValidation": true
    },
    "pythonGoals": {
      "preparingForBackend": true,
      "interviewStyleQuestions": true
    },
    "dailyStudyPlan": {
      "currentlyPlanningParallelPythonAndNode": true
    }
  },
  "projects": {
    "wishlistAndCartUI": {
      "useFontAwesome": true,
      "wishlistSidebarSlideFromRight": true,
      "addToCartWithQty": true,
      "checkoutModalPreferred": true,
      "storagePreference": "Optimal between sessionStorage/localStorage"
    },
    "dynamicFormBuilder": {
      "threeStepFormBuilder": true,
      "addDoneFlowForOptions": true
    },
    "heroSection": {
      "needs3ProductsCarouselWithFade": true,
      "scooterImageIncluded": true
    }
  },
  "personalNotes": {
    "learningStyle": "Prefers simple, step-by-step explanations (like teaching a 7-year-old)",
    "motivation": {
      "struggles": ["Demotivation", "Exhaustion", "Relationship stress"],
      "askedForAdvice": true
    },
    "palmAndAstrology": {
      "sharedPalmImages": true,
      "natalChart": {
        "dob": "2000-03-04",
        "tob": "23:27",
        "pob": "Virar/Mumbai/Maharashtra"
      },
      "wantsFullAstroAnalysis": true
    }
  },
  "meta": {
    "timezone": "Asia/Kolkata",
    "lastUpdated": "2025-10-19T10:00:00+05:30",
    "source": "user-provided conversation/context"
  }
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res)=>{
    res.send("chaimasalcom")
})

app.get('/login',(req,res)=>{
    res.send("<h1>Please Login Bhai</h1>")
})

app.get('/google',(req,res)=>{
    res.send("<h1>Welcome to google</h1>")
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})