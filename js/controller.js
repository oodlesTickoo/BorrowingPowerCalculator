app.controller("TTRController", ['$scope', '$timeout', 'AgeCalculator', 'PdfMaker', 'LineChartService', 'taxRateCalculate', function($scope, $timeout, AgeCalculator, PdfMaker, LineChartService, taxRateCalculate) {

  $scope.infoShow = function(value) {
      if (value) {
          document.getElementsByClassName("information-overlay")[0].style.visibility = "visible";
          document.getElementsByClassName("information-overlay")[0].style.zIndex = "9999";
          document.getElementsByClassName("information-overlay")[0].style.position = "inline-block";
          document.getElementsByClassName("information-overlay")[0].style.height = "" + (document.getElementsByClassName("otrp-calculator")[0].clientHeight - 10) + "px";
      } else {
          document.getElementsByClassName("information-overlay")[0].style.visibility = "hidden";
      }
  }

  /**
    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };



    $scope.personalDetails = {};
    $scope.forms = {};

    $scope.personalDetails = {
        firstName : "Amit",
        lastName : "Kumar",
        email : "iamitkrs@gmail.com",
        mobile: 412121212,
        postalCode : 1234
    };

    $scope.totalPercentageSelected=100;

    $scope.australianShares1 = 10;
    $scope.internationalShares1 = 10;
    $scope.internationalSharesHedged1 = 10;
    $scope.usShares1 = 10;
    $scope.australianBonds1 = 10;
    $scope.internationalBondsHedged1 = 10;
    $scope.cash1 = 10;
    $scope.australianListedProperty1 = 10;
    $scope.internationalListedProperty1 = 20;

    $scope.asset1Total = $scope.australianShares1 + $scope.internationalShares1 +
            $scope.internationalSharesHedged1 + $scope.usShares1 +
            $scope.australianBonds1 + $scope.internationalBondsHedged1 +
            $scope.cash1 + $scope.australianListedProperty1 +
            $scope.internationalListedProperty1+"%";

    $scope.australianShares2 = 10;
    $scope.internationalShares2 = 10;
    $scope.internationalSharesHedged2 = 10;
    $scope.usShares2 = 10;
    $scope.australianBonds2 = 10;
    $scope.internationalBondsHedged2 = 10;
    $scope.cash2 = 10;
    $scope.australianListedProperty2 = 10;
    $scope.internationalListedProperty2 = 20;

    $scope.asset2Total = $scope.australianShares2 + $scope.internationalShares2 +
            $scope.internationalSharesHedged2 + $scope.usShares2 +
            $scope.australianBonds2 + $scope.internationalBondsHedged2 +
            $scope.cash2 + $scope.australianListedProperty2 +
            $scope.internationalListedProperty2+"%";
            */

    var initDate = new Date();
    initDate.setYear(1977);
    initDate.setMonth(3);
    initDate.setDate(1);
    $scope.dob = initDate;
    $scope.firstDP = function() {
        $scope.dateOptions.maxDate = new Date(1998, 11, 31);
        $scope.dateOptions.minDate = new Date(1950, 0, 1);
        console.log("firstDp", $scope.dateOptions.minDate);
    }

    $scope.secondDp = function() {
        delete $scope.dateOptions.maxDate;
    }

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        showWeeks: true
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        showWeeks: false
    };

    $scope.open1 = function() {
        $scope.popup1.opened = true;
        $scope.firstDP();
    };

    $scope.open2 = function() {
        $scope.secondDp();
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'dd/MM/yyyy', 'd!/M!/yyyy'];
    $scope.format = $scope.formats[5];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }
    var dt = new Date();

    $scope.fy = dt.getMonth() > 5 ? dt.getFullYear() : dt.getFullYear() - 1;

    $scope.age = AgeCalculator.getAge($scope.dob, $scope.fy);





    $scope.ageChange = function() {
        var dobText = document.getElementById("dobText");
        // console.log("dobText",new Date(dobText.value));
        var dateString = dobText.value;
        var dateArr = dateString.split("/");

        var date_regex = /^([1-9]|0[1-9]|1\d|2\d|3[01])\/(0[1-9]|[1-9]|1[0-2])\/(19[5-9][0-9])$/;
        var correct = date_regex.test(dobText.value);
        var fd = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);

        if (((fd.getMonth() + 1) === Number(dateArr[1]) && fd.getDate() === Number(dateArr[0])) && correct) {
            $scope.dob = fd;
        } else {
            $scope.dob = initDate;
        }
        $scope.age = AgeCalculator.getAge($scope.dob, $scope.fy);
        // calculateFinal();


    }

    String.prototype.replaceAll = function(search, replacement) {
            var target = this;
            return target.split(search).join(replacement);
        };

      $scope.result = {}
    $scope.loan_term = 20,
    $scope.Inflation = 2.50,
    //$scope.member1Age = 40,
    $scope.YourAnnualTaxableIncome = 127892.014851933,
    $scope.lowerBond = [0, 18201, 37001 ,80001 , 180001],
    $scope.taxRate = [0, 0.19, 0.325, 0.37, 0.45 ];
  //  $scope.taxOnIncome = taxBase($scope.YourAnnualTaxableIncome)+($scope.YourAnnualTaxableIncome-$scope.lowerBond[3]+1)*$scope.taxRate[3],  // =VLOOKUP(B3,$H$2:$K$7,4,1)+(B3-VLOOKUP(B3,$H$2:$K$7,1,1)+1)*VLOOKUP(B3,$H$2:$K$7,3,1)
    $scope.netAnnualIncomeAfterTax = $scope.YourAnnualTaxableIncome - $scope.taxOnIncome,
    $scope.SalaryExcludeTaxAndSuperPerYearMember1= 120000,
    $scope.member2Age = 35,
    $scope.SalaryExcludeTaxAndSuperPerYearMember2 = 80000,
    $scope.InvestmentIncomePerYear = 10000,
    $scope.RentalIncomeInvestmentPropertyPerWeek = 550,
    $scope.OtherIncomePerYear = 10000,
    $scope.AreYouSingleOrCouple = "Couple",
    $scope.NumberOfDependents = "2",
    $scope.CreditCardOutstandingBalance = 10000,
    $scope.DoYouHaveAnExistingLoan = "Yes",
    $scope.CurrentLoanBalance = 200000,
    $scope.CurrentInterestRatePerYear = 6,
    $scope.RemainingLoanTermYears = 10,
    $scope.InterestRate049 = Math.pow(1+$scope.CurrentInterestRatePerYear/100, (1/12))-1 , //(1+H8)^(1/12)-1
    $scope.ProjectedMonthlyRepayment = $scope.CurrentLoanBalance/((1-Math.pow(1+$scope.InterestRate049,-$scope.RemainingLoanTermYears*12))/$scope.InterestRate049),
    $scope.DoYouHaveMoreLoan = "No",
    $scope.CurrentLoanBalanceInMoreLoan = 300000,
    $scope.CurrentInterestRatePerYearInMoreLoan = 7,
    $scope.RemainingLoanTermYearsInMoreLoan = 15,
    $scope.InterestRate057 = Math.pow(1+$scope.CurrentInterestRatePerYearInMoreLoan, 1/12) - 1;
    $scope.ProjectedMonthlyRepaymentInMoreLoan = $scope.CurrentLoanBalanceInMoreLoan/((1-Math.pow(1+$scope.InterestRate057, -$scope.RemainingLoanTermYearsInMoreLoan*12))/$scope.InterestRate057),
    $scope.GenderOfMember1 = "Male",
    $scope.GenderOfMember2 = "Female",
    $scope.EstimatedInterestRate = 7,
    $scope.spauseSalary = 10000,
    $scope.spauseRent = 50000,
    $scope.spauseInvestments = 3000,
    $scope.spauseSuper = 20000,
    $scope.listOb = [
        { id: 0, name: "Week" },
        { id: 1, name: "Fortnight" },
        { id: 2, name: "Month" },
        { id: 3, name: "Yearly" }
    ],


    $scope.personalDetails = {
        firstName: "Dexter",
        lastName: "Payne",
        email: "dexter@gmail.com",
        mobile: 412121212,
        postalCode: 1234
    };



    var lowerBondArray = [0, 18201, 37001 ,80001 , 180001], //H
        upperBondArray = [18200,37000,80000,180000,"Above"], //I
        taxRateArray = [0, 0.19, 0.325, 0.37, 0.45 ], // j
        taxBaseArray = [0, 0, (upperBondArray[1]-lowerBondArray[1])*taxRateArray[1] , (upperBondArray[2]-lowerBondArray[2])*taxRateArray[2], (upperBondArray[3]-lowerBondArray[3])*taxRateArray[3]];


    function taxBase(getValue){


          if(getValue>=0 && getValue<=18200){
            return 0;
          }else if(getValue>=18201 && getValue<=37000){
            return 1;
          }else if(getValue>=37001 && getValue<=80000){
            return 2;
          }else if(getValue>=80001 && getValue<=180000){
            return 3;
          }else if(getValue>=180001){
            return 4;
          }
    }

    $scope.marriedStatusOption = true;
    $scope.genderMmbr1 = false; //false for male
    $scope.genderMmbr2 = true; //true for female

    $scope.getGenderOfMember1 = function(gender){
      $scope.genderMmbr1 = gender;

      if(gender == true){
        $scope.GenderOfMember1 = "Female"
      }else{
        $scope.GenderOfMember1 = "Male"
      }

      //console.log($scope.genderMmbr1)
    }

    $scope.getGenderOfMember2 = function(gender){
      $scope.genderMmbr2 = gender;
      if(gender == true){
        $scope.GenderOfMember2 = "Female"
      }else{
        $scope.GenderOfMember2 = "Male"
      }
      //console.log($scope.GenderOfMember2)
    }

    $scope.marriedStatus = function(getstatus){
      $scope.marriedStatusOption = getstatus;
      if($scope.marriedStatusOption == true){
          $scope.AreYouSingleOrCouple = "Couple";
          console.log($scope.AreYouSingleOrCouple, getstatus)

      }else{
        $scope.AreYouSingleOrCouple = "Single";
        console.log($scope.AreYouSingleOrCouple, getstatus)
      }

    }


    //all blank value array
    $scope.year = [],
    $scope.InflationAry = [],
    $scope.member1AgeAry = [],
    $scope.grossSalleryMember1Ary = [],
    $scope.afterTaxSallaryMember1Ary = [],
    $scope.member2AgeAry = [],
    $scope.grossSalleryMember2Ary = [],
    $scope.afterTaxSallaryMember2Ary = [],
    $scope.InvestmentIncome = [],
    $scope.RentalIncome = [],
    $scope.otherIncome = [],
    $scope.EstimatedLivingCost = [],
    $scope.CreditCardLiability = [],
    $scope.Loan1Repayment = [],
    $scope.Loan2Repayment = [],
    $scope.RemainingBalance = [],
    $scope.afterTaxSallaryMember1AryExpectedCashYear = [],
    $scope.afterTaxSallaryMember2AryExpectedCashYear = [],
    $scope.RemainingBalance2 = [],

    //female life table
    $scope.femaleTableAge = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109],

    $scope.femaleTableIEColomn = [100000, 99665, 99638, 99621, 99610, 99600, 99590, 99580, 99572, 99564, 99557, 99550, 99543, 99535, 99526, 99514, 99498, 99476, 99451, 99424, 99398, 99372, 99346, 99320, 99294, 99268, 99242, 99214, 99186, 99155, 99123, 99089, 99051, 99011, 98968, 98921, 98870, 98815, 98756, 98691, 98620, 98544, 98460, 98370, 98271, 98164, 98047, 97920, 97783, 97634, 97472, 97298, 97109, 96905, 96686, 96449, 96195, 95921, 95625, 95304, 94955, 94575, 94161, 93711, 93224, 92696, 92121, 91493, 90806, 90050, 89218, 88298, 87282, 86158, 84916, 83544, 82034, 80373, 78547, 76533, 74307, 71843, 69115, 66101, 62785, 59161, 55234, 51026, 46577, 41942, 37197, 32433, 27748, 23250, 19050, 15246, 11911, 9081, 6760, 4915, 3496, 2436, 1659, 1105, 720, 459, 286, 175, 105, 61],

    $scope.femaleTableDEColomn = [335, 27, 17, 11, 11, 10, 9, 9, 8, 7, 7, 7, 8, 9, 12, 16, 22, 25, 26, 26, 26, 26, 26, 26, 26, 27, 27, 29, 30, 32, 35, 37, 40, 43, 47, 51, 55, 60, 65, 70, 77, 83, 91, 99, 107, 117, 127, 137, 149, 161, 175, 189, 204, 220, 236, 254, 274, 296, 321, 349, 381, 414, 449, 487, 528, 575, 628, 688, 756, 833, 919, 1016, 1124, 1242, 1371, 1510, 1661, 1827, 2014, 2226, 2464, 2728, 3014, 3316, 3624, 3927, 4208, 4450, 4635, 4745, 4765, 4685, 4498, 4200, 3804, 3335, 2829, 2322, 1844, 1419, 1060 ,776 ,554 ,385 ,261 ,173 ,112 ,70 ,43 ,26],

    $scope.femaleTablePXColomn =  [ 0.996648 ,  0.999731 ,  0.99983 ,  0.999892 ,  0.999894 ,  0.999899 ,  0.999906 ,  0.999913 ,  0.999921 ,  0.999927 ,  0.999931 ,  0.99993 ,  0.999923 ,  0.999907 ,  0.99988 ,  0.999838 ,  0.999778 ,  0.99975 ,  0.999735 ,  0.999735 ,  0.999737 ,  0.999739 ,  0.99974 ,  0.99974 ,  0.999737 ,  0.999732 ,  0.999724 ,  0.999712 ,  0.999696 ,  0.999675 ,  0.999651 ,  0.999624 ,  0.999595 ,  0.999562 ,  0.999526 ,  0.999487 ,  0.999444 ,  0.999396 ,  0.999343 ,  0.999286 ,  0.999223 ,  0.999154 ,  0.999079 ,  0.998997 ,  0.998908 ,  0.998812 ,  0.998708 ,  0.998596 ,  0.998476 ,  0.998347 ,  0.998208 ,  0.99806 ,  0.997902 ,  0.997734 ,  0.997554 ,  0.997363 ,  0.997153 ,  0.996916 ,  0.996646 ,  0.996336 ,  0.995992 ,  0.995622 ,  0.995229 ,  0.994804 ,  0.994332 ,  0.993797 ,  0.993186 ,  0.992485 ,  0.991679 ,  0.990754 ,  0.989695 ,  0.98849 ,  0.987123 ,  0.985582 ,  0.983852 ,  0.98192 ,  0.979758 ,  0.977274 ,  0.974362 ,  0.970918 ,  0.96684 ,  0.96203 ,  0.956392 ,  0.949834 ,  0.942272 ,  0.933625 ,  0.923821 ,  0.912796 ,  0.900496 ,  0.886875 ,  0.871902 ,  0.855556 ,  0.837909 ,  0.819351 ,  0.800324 ,  0.781234 ,  0.762454 ,  0.744323 ,  0.727147 ,  0.711202 ,  0.696737 ,  0.681203 ,  0.666181 ,  0.651594 ,  0.637453 ,  0.623764 ,  0.610529 ,  0.597752 ,  0.585433 ,  0.573574 ],

    $scope.femaleTableQXColomn =  [0.003352, 0.000269, 0.00017, 0.000108, 0.000106, 0.000101, 0.000094, 0.000087, 0.000079, 0.000073, 0.000069, 0.00007, 0.000077, 0.000093, 0.00012, 0.000162, 0.000222, 0.00025, 0.000265, 0.000265, 0.000263, 0.000261, 0.00026, 0.00026, 0.000263, 0.000268, 0.000276, 0.000288, 0.000304, 0.000325, 0.000349, 0.000376, 0.000405, 0.000438, 0.000474, 0.000513, 0.000556, 0.000604, 0.000657, 0.000714, 0.000777, 0.000846, 0.000921, 0.001003, 0.001092, 0.001188, 0.001292, 0.001404, 0.001524, 0.001653, 0.001792, 0.00194, 0.002098, 0.002266, 0.002446, 0.002637, 0.002847, 0.003084, 0.003354, 0.003664, 0.004008, 0.004378, 0.004771, 0.005196, 0.005668, 0.006203, 0.006814, 0.007515, 0.008321, 0.009246, 0.010305, 0.01151, 0.012877, 0.014418, 0.016148, 0.01808, 0.020242, 0.022726, 0.025638, 0.029082, 0.03316, 0.03797, 0.043608, 0.050166, 0.057728, 0.066375, 0.076179, 0.087204, 0.099504, 0.113125, 0.128098, 0.144444, 0.162091, 0.180649, 0.199676, 0.218766, 0.237546, 0.255677, 0.272853, 0.288798, 0.303263, 0.318797 ,0.333819 ,0.348406 ,0.362547 , 0.376236 ,0.389471 , 0.402248 , 0.414567 ,0.426426 ],

    $scope.femaleTableMUEColomn =  [0, 0.000331, 0.000213, 0.000131, 0.000102, 0.000104, 0.000098, 0.000091, 0.000083, 0.000076, 0.00007, 0.000069, 0.000072, 0.000083, 0.000104, 0.000138, 0.000193, 0.00024, 0.00026, 0.000266, 0.000264, 0.000262, 0.00026, 0.00026, 0.000261, 0.000265, 0.000271, 0.000281, 0.000295, 0.000314, 0.000337, 0.000362, 0.00039, 0.000421, 0.000456, 0.000493, 0.000534, 0.000579, 0.00063, 0.000685, 0.000745, 0.000811, 0.000883, 0.000961, 0.001047, 0.001139, 0.001239, 0.001348, 0.001464, 0.001588, 0.001722, 0.001866, 0.002019, 0.002183, 0.002357, 0.002542, 0.002742, 0.002965, 0.003218, 0.003509, 0.003838, 0.004198, 0.00458, 0.004989, 0.005438, 0.005942, 0.006516, 0.007174, 0.007931, 0.008801, 0.0098, 0.010941, 0.01224, 0.013711, 0.015368, 0.017226, 0.0193, 0.021655, 0.024398, 0.027642, 0.031498, 0.036078, 0.041492, 0.047853, 0.055271, 0.063859, 0.073727, 0.084989, 0.097755, 0.112139, 0.128253, 0.146213, 0.166113, 0.187798, 0.210825, 0.23473, 0.259059, 0.283355, 0.30716, 0.330014, 0.330014, 0.3513, 0.37235, 0.395134 ,0.417314, 0.439321, 0.461093, 0.482593, 0.503787, 0.524639, 0.545113],

    $scope.femaleTableEXColomn =  [84.31, 83.6, 82.62, 81.63, 80.64, 79.65, 78.66, 77.66, 76.67, 75.68, 74.68, 73.69, 72.69, 71.7, 70.7, 69.71, 68.72, 67.74, 66.76, 65.77, 64.79, 63.81, 62.82, 61.84, 60.86, 59.87, 58.89, 57.9, 56.92, 55.94, 54.96, 53.98, 53, 52.02, 51.04, 50.06, 49.09, 48.12, 47.14, 46.18, 45.21, 44.24, 43.28, 42.32, 41.36, 40.41, 39.45, 38.5, 37.56, 36.61, 35.67, 34.74, 33.8, 32.87, 31.95, 31.02, 30.1, 29.19, 28.28, 27.37, 26.47, 25.57, 24.68, 23.8, 22.92, 22.05, 21.18, 20.33, 19.48, 18.64, 17.8, 16.98, 16.18, 15.38, 14.6, 13.83, 13.08, 12.33, 11.61, 10.9, 10.21, 9.55, 8.9, 8.29, 7.7, 7.14, 6.61, 6.11, 5.65, 5.22, 4.82, 4.45, 4.12, 3.82, 3.55, 3.32, 3.11, 2.93, 2.77, 2.62, 2.62, 2.5, 2.38, 2.27, 2.17, 2.08,2, 1.92, 1.85, 1.79, 1.73],

    $scope.femaleTableLEColomn =  [99709, 99650, 99629, 99615, 99605, 99595, 99585, 99576, 99568, 99560, 99553, 99546, 99539, 99531, 99520, 99506, 99487, 99463, 99438, 99411, 99385, 99359, 99333, 99307, 99281, 99255, 99228, 99200, 99171, 99140, 99106, 99070, 99032, 98990, 98945, 98896, 98843, 98786, 98724, 98656, 98582, 98503, 98416, 98321, 98218, 98106, 97985, 97852, 97709, 97554, 97386, 97205, 97008, 96797, 96569, 96324, 96060, 95775, 95467, 95132, 94768, 94370, 93939, 93471, 92964, 92413, 91812, 91155, 90434, 89641, 88766, 87799, 86729, 85547, 84241, 82801, 81217, 79475, 77557, 75439, 73096, 70502, 67633, 64469, 60999, 57222, 53152, 48820, 44272, 39575, 34813, 30079, 25479, 21121, 17112, 13537, 10453, 7879, 5800, 4173, 2939 ,2026 ,1366 ,901 ,581 ,367 ,226 ,137 ,81 ,47],

    $scope.femaleTableTEColomn =  [8431213, 8331504, 8231853, 8132224, 8032609, 7933004, 7833409, 7733824, 7634248, 7534681, 7435121, 7335567, 7236021, 7136482, 7036952, 6937432, 6837926, 6738438, 6638975, 6539538, 6440126, 6340741, 6241382, 6142049, 6042742, 5943461, 5844206, 5744978, 5645778, 5546607, 5447468, 5348362, 5249291, 5150260, 5051270, 4952325, 4853429, 4754586, 4655800, 4557077, 4458421, 4359838, 4261336, 4162920, 4064599, 3966381, 3868275, 3770291, 3672438, 3574729, 3477175, 3379788, 3282584, 3185576, 3088779, 2992210, 2895886, 2799827, 2704052, 2608585, 2513452, 2418685, 2324314, 2230375, 2136904, 2043940, 1951528, 1859716, 1768561, 1678127, 1588486, 1499721, 1411922, 1325193, 1239646, 1155404, 1072603, 991386, 911912, 834355, 758916, 685820, 615317, 547684, 483215, 422216, 364994, 311842, 263022, 218750, 179175, 144362, 114283, 88804, 67683, 50572, 37034, 26581, 18702, 12902, 8730 ,5791 ,3764 ,2398 ,1498 ,917 ,550 ,324 ,187 ,106],

    $scope.femaleTableCondtionalSurvivalProb =  [1],

    $scope.femaleTablePx05 = [];

    //Male life table

    $scope.maleTableAge = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109],

    $scope.maleTableIEColomn = [100000, 99588, 99553, 99533, 99520, 99507, 99495, 99484, 99474, 99464, 99455, 99446, 99437, 99427, 99416, 99400, 99379, 99349, 99303, 99246, 99185, 99124, 99063, 99002, 98940, 98876, 98811, 98742, 98671, 98597, 98519, 98438, 98352, 98263, 98171, 98074, 97973, 97867, 97756, 97639, 97516, 97386, 97247, 97099, 96940, 96770, 96586, 96388, 96173, 95940, 95687, 95413, 95115, 94791, 94439, 94058, 93646, 93202, 92723, 92207, 91649, 91044, 90386, 89671, 88890, 88040, 87115, 86111, 85025, 83850, 82577, 81194, 79689, 78046, 76251, 74289, 72144, 69804, 67259, 64503, 61529, 58336, 54929, 51316, 47518, 43564, 39495, 35360, 31219, 27142, 23197, 19458, 15990, 12859, 10112, 7776, 5849, 4309, 3113, 2211, 1548, 1064, 719, 477, 311, 199, 125, 77, 47, 28],

    $scope.maleTableDEColomn = [412, 34, 21, 13, 13, 12, 11, 10, 10, 9, 9, 9, 10, 12, 16, 21, 30, 46, 57, 61, 61, 61, 61, 62, 64, 66, 68, 71, 74, 78, 81, 85, 89, 93, 97, 101, 106, 111, 117, 123, 130, 139, 148, 159, 170, 184, 198, 215, 233, 253, 274, 298, 324, 352, 381, 412, 444, 478, 516, 558, 605, 657, 716, 780, 850, 925, 1003, 1086, 1175, 1273, 1383, 1505, 1643, 1795, 1963, 2145, 2340, 2545, 2757, 2974, 3193, 3408, 3612, 3798, 3954, 4070, 4135, 4140, 4078, 3944, 3740, 3467, 3131, 2747, 2337, 1927, 1540, 1195, 902, 663, 484, 345, 242, 166, 112, 74, 48, 30, 19, 12],

    $scope.maleTablePXColomn =  [0.995879, 0.999654, 0.999793, 0.999867, 0.999873, 0.999882, 0.99989, 0.999896, 0.999903, 0.999908, 0.999911, 0.99991, 0.999901, 0.99988, 0.999844, 0.999785, 0.999699, 0.999539, 0.999426, 0.999386, 0.999386, 0.999388, 0.999383, 0.999372, 0.999356, 0.999334, 0.999309, 0.999279, 0.999246, 0.999211, 0.999174, 0.999135, 0.999095, 0.999055, 0.999013, 0.998969, 0.998921, 0.998867, 0.998807, 0.998739, 0.998662, 0.998576, 0.998477, 0.998366, 0.998242, 0.998102, 0.997945, 0.997771, 0.997579, 0.997366, 0.997132, 0.996875, 0.996595, 0.99629, 0.995961, 0.995619, 0.995258, 0.994866, 0.994432, 0.993947, 0.9934, 0.99278, 0.992079, 0.991296, 0.990434, 0.989495, 0.988481, 0.987386, 0.986178, 0.984814, 0.983255, 0.98146, 0.979388, 0.977002, 0.974262, 0.97113, 0.96757, 0.963545, 0.959013, 0.953896, 0.948113, 0.941583, 0.934233, 0.925991, 0.916793, 0.906581, 0.895302, 0.882914, 0.869381, 0.854677, 0.838789, 0.821802, 0.80417, 0.786395, 0.768942, 0.752235, 0.736659, 0.722567, 0.710284, 0.700115, 0.687451, 0.675387, 0.663749, 0.652146, 0.639579, 0.627525, 0.615877, 0.604637, 0.5938, 0.583359],

    $scope.maleTableQXColomn =  [0.004121, 0.000346, 0.000207, 0.000133, 0.000127, 0.000118, 0.00011, 0.000104, 0.000097, 0.000092, 0.000089, 0.00009, 0.000099, 0.00012, 0.000156, 0.000215, 0.000301, 0.000461, 0.000574, 0.000614, 0.000614, 0.000612, 0.000617, 0.000628, 0.000644, 0.000666, 0.000691, 0.000721, 0.000754, 0.000789, 0.000826, 0.000865, 0.000905, 0.000945, 0.000987, 0.001031, 0.001079, 0.001133, 0.001193, 0.001261, 0.001338, 0.001424, 0.001523, 0.001634, 0.001758, 0.001898, 0.002055, 0.002229, 0.002421, 0.002634, 0.002868, 0.003125, 0.003405, 0.00371, 0.004039, 0.004381, 0.004742, 0.005134, 0.005568, 0.006053, 0.0066, 0.00722, 0.007921, 0.008704, 0.009566, 0.010505, 0.011519, 0.012614, 0.013822, 0.015186, 0.016745, 0.01854, 0.020612, 0.022998, 0.025738, 0.02887, 0.03243, 0.036455, 0.040987, 0.046104, 0.051887, 0.058417, 0.065767, 0.074009, 0.083207, 0.093419, 0.104698, 0.117086, 0.130619, 0.145323, 0.161211, 0.178198, 0.19583, 0.213605, 0.231058, 0.247765, 0.263341, 0.277433, 0.289716, 0.299885, 0.312549, 0.324613, 0.336251, 0.347854, 0.360421, 0.372475, 0.384123, 0.395363, 0.4062, 0.416641],

    $scope.maleTableMUEColomn =  [0, 0.000437, 0.000266, 0.000159, 0.000125, 0.000123, 0.000114, 0.000107, 0.0001, 0.000094, 0.00009, 0.000089, 0.000093, 0.000107, 0.000135, 0.000181, 0.00025, 0.000379, 0.000528, 0.000604, 0.000618, 0.000613, 0.000614, 0.000622, 0.000635, 0.000654, 0.000678, 0.000706, 0.000737, 0.000771, 0.000807, 0.000846, 0.000885, 0.000925, 0.000966, 0.001009, 0.001055, 0.001106, 0.001163, 0.001226, 0.001299, 0.00138, 0.001473, 0.001578, 0.001695, 0.001827, 0.001976, 0.002141, 0.002324, 0.002527, 0.002751, 0.002997, 0.003266, 0.00356, 0.003879, 0.004216, 0.004568, 0.004944, 0.005358, 0.005818, 0.006335, 0.006921, 0.007586, 0.008334, 0.009164, 0.010073, 0.01106, 0.012124, 0.013283, 0.014581, 0.016058, 0.017757, 0.01972, 0.021989, 0.024606, 0.027613, 0.031053, 0.034966, 0.039396, 0.044413, 0.050112, 0.056592, 0.06395, 0.072282, 0.081687, 0.092262, 0.104105, 0.117314, 0.131986, 0.14822, 0.16612, 0.185759, 0.206919, 0.229043, 0.25155, 0.273869, 0.29543, 0.315661, 0.333996, 0.349585, 0.365037, 0.383721, 0.401177, 0.418497, 0.436809, 0.456416, 0.47519, 0.493673, 0.511805, 0.529572],

    $scope.maleTableEXColomn =  [80.06, 79.39, 78.42, 77.44, 76.45, 75.46, 74.46, 73.47, 72.48, 71.49, 70.49, 69.5, 68.51, 67.51, 66.52, 65.53, 64.55, 63.56, 62.59, 61.63, 60.67, 59.7, 58.74, 57.78, 56.81, 55.85, 54.89, 53.92, 52.96, 52, 51.04, 50.08, 49.13, 48.17, 47.22, 46.26, 45.31, 44.36, 43.41, 42.46, 41.51, 40.57, 39.62, 38.68, 37.75, 36.81, 35.88, 34.95, 34.03, 33.11, 32.2, 31.29, 30.38, 29.49, 28.59, 27.71, 26.83, 25.95, 25.09, 24.22, 23.37, 22.52, 21.68, 20.85, 20.03, 19.22, 18.41, 17.62, 16.84, 16.07, 15.31, 14.56, 13.83, 13.11, 12.4, 11.72, 11.05, 10.41, 9.78, 9.18, 8.6, 8.04, 7.51, 7, 6.52, 6.06, 5.64, 5.24, 4.87, 4.52, 4.21, 3.92, 3.66, 3.44, 3.24, 3.06, 2.91, 2.78, 2.67, 2.57, 2.46, 2.36, 2.27, 2.19, 2.11, 2.03, 1.96, 1.9, 1.84, 1.79],

    $scope.maleTableLEColomn =  [99632, 99569, 99542, 99526, 99513, 99501, 99490, 99479, 99469, 99460, 99451, 99442, 99433, 99422, 99408, 99390, 99365, 99327, 99275, 99216, 99155, 99094, 99033, 98971, 98908, 98844, 98777, 98707, 98634, 98558, 98479, 98395, 98308, 98217, 98122, 98023, 97920, 97812, 97698, 97578, 97452, 97317, 97174, 97021, 96856, 96679, 96488, 96282, 96058, 95815, 95552, 95266, 94955, 94617, 94251, 93854, 93426, 92965, 92468, 91931, 91350, 90720, 90034, 89286, 88471, 87584, 86620, 85575, 84445, 83222, 81895, 80452, 78879, 77162, 75284, 73232, 70991, 68549, 65899, 63034, 59951, 56650, 53139, 49431, 45553, 41537, 37430, 33287, 29172, 25155, 21308, 17699, 14394, 11452, 8909, 6779, 5048, 3684, 2640, 1863, 1293, 882, 591, 389, 251, 159, 99, 61, 36, 21],

    $scope.maleTableTEColomn =  [8006148, 7906516, 7806947, 7707404, 7607878, 7508365, 7408864, 7309374, 7209895, 7110426, 7010967, 6911516, 6812074, 6712642, 6613220, 6513812, 6414422, 6315057, 6215730, 6116455, 6017239, 5918085, 5818991, 5719958, 5620987, 5522078, 5423235, 5324458, 5225751, 5127117, 5028559, 4930080, 4831685, 4733376, 4635159, 4537037, 4439013, 4341093, 4243281, 4145583, 4048005, 3950553, 3853236, 3756062, 3659042, 3562186, 3465507, 3369018, 3272737, 3176679, 3080863, 2985311, 2890046, 2795091, 2700473, 2606222, 2512368, 2418941, 2325976, 2233508, 2141576, 2050226, 1959506, 1869473, 1780187, 1691716, 1604132, 1517512, 1431937, 1347492, 1264270, 1182375, 1101923, 1023044, 945882, 870597, 797366, 726375, 657826, 591927, 528893, 468942, 412292, 359153, 309722, 264169, 222632, 185202, 151914, 122742, 97587, 76279, 58581, 44186, 32734, 23825, 17046, 11997, 8313, 5673, 3810, 2517, 1635, 1045, 656, 405, 245, 146, 86, 49],

    $scope.maleTableCondtionalSurvivalProb =  [1],

    $scope.maleTablePx05 = [],
    $scope.existinLoanOption = true,
    $scope.moreLoanOption = true;





    //expenses for single and couple
    $scope.ExpensesForSingleAdultsArray = [
      {
        id : 0,
        noOfDependents:0,
        hpi : 1250,
        hem : 1105
      },
      {
        id : 1,
        noOfDependents:0,
        hpi : 1717,
        hem : 1430
      },
      {
        id : 2,
        noOfDependents:0,
        hpi : 2159,
        hem : 1560
      },
      {
        id : 3,
        noOfDependents:3,
        hpi : 2601,
        hem : 1889
      }
    ]
    $scope.ExpensesForCoupleArray = [
      {
        id : 0,
        noOfDependents:0,
        hpi : 1817,
        hem : 2032
      },
      {
        id : 1,
        noOfDependents:0,
        hpi : 2284,
        hem : 2583
      },
      {
        id : 2,
        noOfDependents:0,
        hpi : 2726,
        hem : 2704
      },
      {
        id : 3,
        noOfDependents:3,
        hpi : 3168,
        hem : 3137
      }
    ];

    //output array value
    $scope.outputYear = [];
    $scope.cashInflow = [];
    $scope.cashOutflow = [];
    $scope.surplus = [];
    $scope.discountRate = [];
    $scope.NetNPVArray = [];



/***********************************************************
             slider range and input
************************************************************/
/*
    var initialInvestmentAmountNewSlider = document.getElementById("initialInvestmentAmountNewSlider");
    var initialInvestmentAmountNewInput = document.getElementById("initialInvestmentAmountNewInput");
    //$scope.initialInvestmentAmountNew=$scope.member1Age;
    noUiSlider.create(initialInvestmentAmountNewSlider, {
        start: $scope.member1Age,
        range: {
            min: [1],
            max: [100]
        },
        format: wNumb({
            decimals: 0,
            thousand: ','
        }),
        connect: 'lower'
    });

    initialInvestmentAmountNewSlider.noUiSlider.on('update', function(values, handle) {
        initialInvestmentAmountNewInput.value = values[handle];
        $scope.member1Age = values[handle];
    });
    initialInvestmentAmountNewSlider.noUiSlider.on('set', function(values, handle) {
        initialInvestmentAmountNewInput.value = values[handle];
        $scope.member1Age = values[handle];
    });

    initialInvestmentAmountNewInput.addEventListener("change", function() {
        initialInvestmentAmountNewSlider.noUiSlider.set(initialInvestmentAmountNewInput.value);
    });
    */

    //slider-2 input-2
    var slider2 = document.getElementById("slider2");
    var input2 = document.getElementById("input2");

    //$scope.IntialVal2 =$scope.member2Age;
    noUiSlider.create(slider2, {
        start: $scope.member2Age,
        range: {
            min: [1],
            max: [100]
        },
        format: wNumb({
            decimals: 0,
            thousand: ','
        }),
        connect: 'lower'
    });
    slider2.noUiSlider.on('update', function(values, handle) {
        input2.value = values[handle];
        $scope.member2Age = values[handle];
    });
    slider2.noUiSlider.on('set', function(values, handle) {
        input2.value = values[handle];
        $scope.member2Age = values[handle];
    });
    input2.addEventListener("change", function() {
        slider2.noUiSlider.set(input2.value);
    });

    //slider-3 input-3
    var slider3 = document.getElementById("slider3");
    var input3 = document.getElementById("input3");

    //$scope.IntialVal3 =$scope.EstimatedInterestRate;
    noUiSlider.create(slider3, {
        start: $scope.EstimatedInterestRate,
        range: {
            min: [0],
            max: [20]
        },
        format: wNumb({
            decimals: 2,
            postfix: ' %',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider3.noUiSlider.on('update', function(values, handle) {
        input3.value = values[handle];
        $scope.EstimatedInterestRate = values[handle];
    });
    slider3.noUiSlider.on('set', function(values, handle) {
        input3.value = values[handle];
        $scope.EstimatedInterestRate = values[handle];
    });
    input3.addEventListener("change", function() {
        slider3.noUiSlider.set(input3.value);
    });


    //slider-4 input-4
    var slider4 = document.getElementById("slider4");
    var input4 = document.getElementById("input4");

    //$scope.IntialVal4 =$scope.Inflation;
    noUiSlider.create(slider4, {
        start: $scope.Inflation,
        range: {
            min: [0],
            max: [10]
        },
        format: wNumb({
            decimals: 2,
            postfix: ' %',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider4.noUiSlider.on('update', function(values, handle) {
        input4.value = values[handle];
        $scope.Inflation = values[handle];
    });
    slider4.noUiSlider.on('set', function(values, handle) {
        input4.value = values[handle];
        $scope.Inflation = values[handle];
    });
    input4.addEventListener("change", function() {
        slider4.noUiSlider.set(input4.value);
    });

    //slider-5 input-5
    var slider5 = document.getElementById("slider5");
    var input5 = document.getElementById("input5");

    //$scope.IntialVal5 =$scope.SalaryExcludeTaxAndSuperPerYearMember1;
    noUiSlider.create(slider5, {
        start: $scope.SalaryExcludeTaxAndSuperPerYearMember1,
        range: {
            min: [1000],
            max: [1000000]
        },
        format: wNumb({
            decimals: 2,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider5.noUiSlider.on('update', function(values, handle) {
        input5.value = values[handle];
        $scope.SalaryExcludeTaxAndSuperPerYearMember1 = values[handle];
        $scope.paymentFrequency = $('.spPaymentFrequency option:selected').val();

        netReturnChange();
    });
    slider5.noUiSlider.on('set', function(values, handle) {
        input5.value = values[handle];
        $scope.SalaryExcludeTaxAndSuperPerYearMember1 = values[handle];
    });
    input5.addEventListener("change", function() {
        slider5.noUiSlider.set(input5.value);

    });

    $('.spPaymentFrequency').on('change', function() {
        $scope.paymentFrequency = $('.spPaymentFrequency option:selected').val();
        //console.log("$scope.paymentFrequency[0]", $scope.paymentFrequency);
        netReturnChange();
    });

    function netReturnChange() {
      var SalaryExcludeTaxAndSuperPerYearMember1 = $scope.SalaryExcludeTaxAndSuperPerYearMember1.replaceAll('$', '').replaceAll(',', '');
      var taxOnIncome1 = taxRateCalculate.getTaxBase(SalaryExcludeTaxAndSuperPerYearMember1) +
              (SalaryExcludeTaxAndSuperPerYearMember1 - taxRateCalculate.getLowerBoundValue(SalaryExcludeTaxAndSuperPerYearMember1) + 1) * taxRateCalculate.getTaxRate(SalaryExcludeTaxAndSuperPerYearMember1);
      $scope.netAnnualIncomeAfterTax1 = SalaryExcludeTaxAndSuperPerYearMember1 - taxOnIncome1;
      $scope.netPaymentPerPeriod = ($scope.netAnnualIncomeAfterTax1 / (taxRateCalculate.getPeriods($scope.paymentFrequency))).toFixed(2);;
      //console.log('------------------------------------------')
      //console.log("$scope.paymentFrequency ==> ", $scope.paymentFrequency)
      //console.log("test=>", taxRateCalculate.getPeriods($scope.paymentFrequency))
      //console.log("salary ==>", SalaryExcludeTaxAndSuperPerYearMember1);
      //console.log("tax on incom ==>", taxOnIncome1);
      //console.log("netAnnualIncomeAfterTax1 ==>", $scope.netAnnualIncomeAfterTax1);
      //console.log("netPaymentPerPeriod ==>", $scope.netPaymentPerPeriod);
      //$timeout(0);
      //$scope.result.taxOnIncome1 = taxOnIncome1;

      //$scope.result.netAnnualIncomeAfterTax = $scope.netAnnualIncomeAfterTax1;
      //netPaymentPerPeriod = netPaymentPerPeriod;

$scope.paymentFrequencyText = "Net Income Per Week";
      switch ($scope.paymentFrequency) {
              case "0":
                  $scope.paymentFrequencyText = "Net Income Per Week";
                  break;
              case "1":
                  $scope.paymentFrequencyText = "Net Income Per Fortnight";
                  break;
              case "2":
                  $scope.paymentFrequencyText = "Net Income Per Month";
                  break;
              case "3":
                  $scope.paymentFrequencyText = "Net Income Per yearly";
                  break;

          }
          $timeout(0);

    }

    //slider-6 input-6
    var slider6 = document.getElementById("slider6");
    var input6 = document.getElementById("input6");

    //$scope.IntialVal6 =$scope.SalaryExcludeTaxAndSuperPerYearMember2;
    noUiSlider.create(slider6, {
        start: $scope.SalaryExcludeTaxAndSuperPerYearMember2,
        range: {
            min: [1000],
            max: [1000000]
        },
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider6.noUiSlider.on('update', function(values, handle) {
        input6.value = values[handle];
        $scope.SalaryExcludeTaxAndSuperPerYearMember2 = values[handle];
    });
    slider6.noUiSlider.on('set', function(values, handle) {
        input6.value = values[handle];
        $scope.SalaryExcludeTaxAndSuperPerYearMember2 = values[handle];
    });
    input6.addEventListener("change", function() {
        slider6.noUiSlider.set(input6.value);
    });


    //slider-7 input-7
    var slider7 = document.getElementById("slider7");
    var input7 = document.getElementById("input7");

    //$scope.IntialVal7 =$scope.InvestmentIncomePerYear;
    noUiSlider.create(slider7, {
        start: $scope.InvestmentIncomePerYear,
        range: {
            min: [1000],
            max: [1000000]
        },
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider7.noUiSlider.on('update', function(values, handle) {
        input7.value = values[handle];
        $scope.InvestmentIncomePerYear = values[handle];
    });
    slider7.noUiSlider.on('set', function(values, handle) {
        input7.value = values[handle];
        $scope.InvestmentIncomePerYear = values[handle];
    });
    input7.addEventListener("change", function() {
        slider7.noUiSlider.set(input7.value);
    });

    //slider-8 input-8
    var slider8 = document.getElementById("slider8");
    var input8 = document.getElementById("input8");

    //$scope.IntialVal8 =$scope.RentalIncomeInvestmentPropertyPerWeek;
    noUiSlider.create(slider8, {
        start: $scope.RentalIncomeInvestmentPropertyPerWeek,
        range: {
            min: [10],
            max: [1000000]
        },
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider8.noUiSlider.on('update', function(values, handle) {
        input8.value = values[handle];
        $scope.RentalIncomeInvestmentPropertyPerWeek = values[handle];
    });
    slider8.noUiSlider.on('set', function(values, handle) {
        input8.value = values[handle];
        $scope.RentalIncomeInvestmentPropertyPerWeek = values[handle];
    });
    input8.addEventListener("change", function() {
        slider8.noUiSlider.set(input8.value);
    });

    //slider-9 input-9
    var slider9 = document.getElementById("slider9");
    var input9 = document.getElementById("input9");

    //$scope.IntialVal9 =$scope.OtherIncomePerYear;
    noUiSlider.create(slider9, {
        start: $scope.OtherIncomePerYear,
        range: {
          min: [1000],
          max: [1000000]
        },
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider9.noUiSlider.on('update', function(values, handle) {
        input9.value = values[handle];
        $scope.OtherIncomePerYear = values[handle];
    });
    slider9.noUiSlider.on('set', function(values, handle) {
        input9.value = values[handle];
        $scope.OtherIncomePerYear = values[handle];
    });
    input9.addEventListener("change", function() {
        slider9.noUiSlider.set(input9.value);
    });



    //slider-10 input-10
    var slider10 = document.getElementById("slider10");
    var input10 = document.getElementById("input10");

    //$scope.IntialVal10 =$scope.CurrentLoanBalance;
    noUiSlider.create(slider10, {
        start: $scope.CurrentLoanBalance,
        range: {
          min: [1000],
          max: [4000000]
        },
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider10.noUiSlider.on('update', function(values, handle) {
        input10.value = values[handle];
        $scope.CurrentLoanBalance = values[handle];
    });
    slider10.noUiSlider.on('set', function(values, handle) {
        input10.value = values[handle];
        $scope.CurrentLoanBalance = values[handle];
    });
    input10.addEventListener("change", function() {
        slider10.noUiSlider.set(input10.value);
    });

    //slider-11 input-11
    var slider11 = document.getElementById("slider11");
    var input11 = document.getElementById("input11");

    //$scope.IntialVal11 =$scope.CurrentInterestRatePerYear;
    noUiSlider.create(slider11, {
        start: $scope.CurrentInterestRatePerYear,
        range: {
          min: [0],
          max: [15]
        },
        format: wNumb({
            decimals: 2,
            postfix: '%',
            thousand: ','
        }),
        connect: 'lower'
    });



    slider11.noUiSlider.on('update', function(values, handle) {
        input11.value = values[handle];
        $scope.CurrentInterestRatePerYear = values[handle];
    });
    slider11.noUiSlider.on('set', function(values, handle) {
        input11.value = values[handle];
        $scope.CurrentInterestRatePerYear = values[handle];
    });
    input11.addEventListener("change", function() {
        slider11.noUiSlider.set(input11.value);
        $scope.InterestRate057 = Math.pow(1+$scope.CurrentInterestRatePerYearInMoreLoan, 1/12) - 1;

    });


    //slider-12 input-12
    var slider12 = document.getElementById("slider12");
    var input12 = document.getElementById("input12");

    //$scope.IntialVal12 =$scope.RemainingLoanTermYears;
    noUiSlider.create(slider12, {
        start: $scope.RemainingLoanTermYears,
        range: {
          min: [0],
          max: [30]
        },
        format: wNumb({
            decimals: 0,
            thousand: ','
        }),
        connect: 'lower'
    });



    slider12.noUiSlider.on('update', function(values, handle) {
        input12.value = values[handle];
        $scope.RemainingLoanTermYears = values[handle];
    });
    slider12.noUiSlider.on('set', function(values, handle) {
        input12.value = values[handle];
        $scope.RemainingLoanTermYears = values[handle];
    });
    input12.addEventListener("change", function() {
        slider12.noUiSlider.set(input12.value);
    });


    //slider-13 input-13
    var slider13 = document.getElementById("slider13");
    var input13 = document.getElementById("input13");

    //$scope.IntialVal13 =$scope.CurrentLoanBalanceInMoreLoan;
    noUiSlider.create(slider13, {
        start: $scope.CurrentLoanBalanceInMoreLoan,
        range: {
          min: [1000],
          max: [4000000]
        },
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider13.noUiSlider.on('update', function(values, handle) {
        input13.value = values[handle];
        $scope.CurrentLoanBalanceInMoreLoan = values[handle];
    });
    slider13.noUiSlider.on('set', function(values, handle) {
        input13.value = values[handle];
        $scope.CurrentLoanBalanceInMoreLoan = values[handle];
    });
    input13.addEventListener("change", function() {
        slider13.noUiSlider.set(input13.value);
    });

    //slider-14 input-14
    var slider14 = document.getElementById("slider14");
    var input14 = document.getElementById("input14");

    //$scope.IntialVal14 =$scope.CurrentInterestRatePerYearInMoreLoan;
    noUiSlider.create(slider14, {
        start: $scope.CurrentInterestRatePerYearInMoreLoan,
        range: {
          min: [0],
          max: [15]
        },
        format: wNumb({
            decimals: 2,
            postfix: '%',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider14.noUiSlider.on('update', function(values, handle) {
        input14.value = values[handle];
        $scope.CurrentInterestRatePerYearInMoreLoan = values[handle];
    });
    slider14.noUiSlider.on('set', function(values, handle) {
        input14.value = values[handle];
        $scope.CurrentInterestRatePerYearInMoreLoan = values[handle];
    });
    input14.addEventListener("change", function() {
        slider14.noUiSlider.set(input14.value);
    });

    //slider-15 input-15
    var slider15 = document.getElementById("slider15");
    var input15 = document.getElementById("input15");

    //$scope.IntialVal15 =$scope.RemainingLoanTermYearsInMoreLoan;
    noUiSlider.create(slider15, {
        start: $scope.RemainingLoanTermYearsInMoreLoan,
        range: {
          min: [0],
          max: [30]
        },
        format: wNumb({
            decimals: 0,
            thousand: ','
        }),
        connect: 'lower'
    });
    slider15.noUiSlider.on('update', function(values, handle) {
        input15.value = values[handle];
        $scope.RemainingLoanTermYearsInMoreLoan = values[handle];
    });
    slider15.noUiSlider.on('set', function(values, handle) {
        input15.value = values[handle];
        $scope.RemainingLoanTermYearsInMoreLoan = values[handle];
    });
    input15.addEventListener("change", function() {
        slider15.noUiSlider.set(input15.value);
    });

    //slider-16 input-16
    var slider16 = document.getElementById("slider16");
    var input16 = document.getElementById("input16");

    //$scope.IntialVal16 =$scope.CreditCardOutstandingBalance;
    noUiSlider.create(slider16, {
        start: $scope.CreditCardOutstandingBalance,
        range: {
          min: [1000],
          max: [1000000]
        },
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider16.noUiSlider.on('update', function(values, handle) {
        input16.value = values[handle];
        $scope.CreditCardOutstandingBalance = values[handle];
    });
    slider16.noUiSlider.on('set', function(values, handle) {
        input16.value = values[handle];
        $scope.CreditCardOutstandingBalance = values[handle];
    });
    input16.addEventListener("change", function() {
        slider16.noUiSlider.set(input16.value);
    });



    //slider-18 input-18
    /*
    var slider18 = document.getElementById("slider18");
    var input18 = document.getElementById("input18");

    //$scope.IntialVal18 =$scope.NumberOfDependents;
    noUiSlider.create(slider18, {
        start: $scope.NumberOfDependents,
        range: {
          min: [0],
          max: [3]
        },
        format: wNumb({
            decimals: 0,
            thousand: ','
        }),
        connect: 'lower'
    });
    slider18.noUiSlider.on('update', function(values, handle) {
        input18.value = values[handle];
        $scope.NumberOfDependents = values[handle];
    });
    slider18.noUiSlider.on('set', function(values, handle) {
        input18.value = values[handle];
        $scope.NumberOfDependents = values[handle];
    });
    input18.addEventListener("change", function() {
        slider18.noUiSlider.set(input18.value);
    });
    **/

    //slider-19 input-19
    var slider19 = document.getElementById("slider19");
    var input19 = document.getElementById("input19");

    //$scope.IntialVal19 =$scope.loan_term;
    noUiSlider.create(slider19, {
        start: $scope.loan_term,
        step: 10,
        range: {
          min: [10],
          max: [30]
        },
        format: wNumb({
            decimals: 0,
            thousand: ','
        }),
        connect: 'lower'
    });
    slider19.noUiSlider.on('update', function(values, handle) {
        input19.value = values[handle];
        $scope.loan_term = values[handle];
    });
    slider19.noUiSlider.on('set', function(values, handle) {
        input19.value = values[handle];
        $scope.loan_term = values[handle];
    });
    input19.addEventListener("change", function() {
        slider19.noUiSlider.set(input19.value);
    });






    //slider-20 input-20
    /**
    var slider20 = document.getElementById("slider20");
    var input20 = document.getElementById("input20");

    //$scope.IntialVal5 =$scope.SalaryExcludeTaxAndSuperPerYearMember1;
    noUiSlider.create(slider20, {
        start: $scope.spauseSalary,
        range: {
            min: [1000],
            max: [1000000]
        },
        format: wNumb({
            decimals: 2,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider20.noUiSlider.on('update', function(values, handle) {
        input20.value = values[handle];
        $scope.spauseSalary = values[handle];
    });
    slider20.noUiSlider.on('set', function(values, handle) {
        input20.value = values[handle];
        $scope.spauseSalary = values[handle];
    });
    input20.addEventListener("change", function() {
        slider20.noUiSlider.set(input20.value);
    });
    **/

    //slider-21 input-21
    var slider21 = document.getElementById("slider21");
    var input21 = document.getElementById("input21");

    //$scope.IntialVal5 =$scope.SalaryExcludeTaxAndSuperPerYearMember1;
    noUiSlider.create(slider21, {
        start: $scope.spauseRent,
        range: {
            min: [1000],
            max: [1000000]
        },
        format: wNumb({
            decimals: 2,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider21.noUiSlider.on('update', function(values, handle) {
        input21.value = values[handle];
        $scope.spauseRent = values[handle];
    });
    slider21.noUiSlider.on('set', function(values, handle) {
        input21.value = values[handle];
        $scope.spauseRent = values[handle];
    });
    input21.addEventListener("change", function() {
        slider21.noUiSlider.set(input21.value);
    });

    //slider-22 input-22
    var slider22 = document.getElementById("slider22");
    var input22 = document.getElementById("input22");

    //$scope.IntialVal5 =$scope.SalaryExcludeTaxAndSuperPerYearMember1;
    noUiSlider.create(slider22, {
        start: $scope.spauseInvestments,
        range: {
            min: [1000],
            max: [1000000]
        },
        format: wNumb({
            decimals: 2,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider22.noUiSlider.on('update', function(values, handle) {
        input22.value = values[handle];
        $scope.spauseInvestments = values[handle];
    });
    slider22.noUiSlider.on('set', function(values, handle) {
        input22.value = values[handle];
        $scope.spauseInvestments = values[handle];
    });
    input22.addEventListener("change", function() {
        slider22.noUiSlider.set(input22.value);
    });


    //slider-23 input-23
    var slider23 = document.getElementById("slider23");
    var input23 = document.getElementById("input23");

    //$scope.IntialVal5 =$scope.SalaryExcludeTaxAndSuperPerYearMember1;
    noUiSlider.create(slider23, {
        start: $scope.spauseSuper,
        range: {
            min: [1000],
            max: [1000000]
        },
        format: wNumb({
            decimals: 2,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });
    slider23.noUiSlider.on('update', function(values, handle) {
        input23.value = values[handle];
        $scope.spauseSuper = values[handle];
    });
    slider23.noUiSlider.on('set', function(values, handle) {
        input23.value = values[handle];
        $scope.spauseSuper = values[handle];
    });
    input23.addEventListener("change", function() {
        slider23.noUiSlider.set(input23.value);
    });


    // check Do you have an existing loan?

    $scope.haveYouExistingLoan = function(userAns){

      $scope.existinLoanOption = userAns;

    }

    //check Do you have more loan?
    //$scope.moreLoanOption
    $scope.haveYouMoreLoan = function(userAns){
      $scope.moreLoanOption = userAns;
      console.log($scope.moreLoanOption)
    }

    $scope.paymentFrequency = "0";



    $scope.calculateFinal=function(isValid){



      if (isValid) {

        var EstimatedInterestRate = $scope.EstimatedInterestRate.replaceAll('%', '');
        var Inflation = $scope.Inflation.replaceAll('%', '');
        //var member1Age = $scope.age.replaceAll('%', '');
        var SalaryExcludeTaxAndSuperPerYearMember1 = $scope.SalaryExcludeTaxAndSuperPerYearMember1.replaceAll('$', '').replaceAll(',', '');
        var SalaryExcludeTaxAndSuperPerYearMember2 = $scope.SalaryExcludeTaxAndSuperPerYearMember2.replaceAll('$', '').replaceAll(',', '');
        var InvestmentIncomePerYear = $scope.InvestmentIncomePerYear.replaceAll('$', '').replaceAll(',', '');
        var RentalIncomeInvestmentPropertyPerWeek = $scope.RentalIncomeInvestmentPropertyPerWeek.replaceAll('$', '').replaceAll(',', '');
        var OtherIncomePerYear = $scope.OtherIncomePerYear.replaceAll('$', '').replaceAll(',', '');
        var CreditCardOutstandingBalance = $scope.CreditCardOutstandingBalance.replaceAll('$', '').replaceAll(',', '');






         //for loop for 109 values;
         for(var j=0; j<=109; j++){
           $scope.femaleTableCondtionalSurvivalProb[j+1] =  $scope.femaleTableCondtionalSurvivalProb[j]*$scope.femaleTablePXColomn[j];//true
           //J14*(1-E14/2)
           $scope.femaleTablePx05[j] = $scope.femaleTableCondtionalSurvivalProb[j]*(1-$scope.femaleTableQXColomn[j]/2); //true
           $scope.maleTableCondtionalSurvivalProb[j+1] =  $scope.maleTableCondtionalSurvivalProb[j]*$scope.maleTablePXColomn[j];//true
           $scope.maleTablePx05[j] = $scope.maleTableCondtionalSurvivalProb[j]*(1-$scope.maleTableQXColomn[j]/2);
         }

         $scope.maleTableCondtionalSurvivalProb.pop();
         $scope.femaleTableCondtionalSurvivalProb.pop();

         for(i=0; i<$scope.loan_term; i++){
             //year
             $scope.year[i] = i+1;

             //Inflation
             $scope.InflationAry[i] = Math.pow((1+(Inflation/100)), (i+1-1));

             //member 1 age
             $scope.member1AgeAry[i] = (Number($scope.age) + i+1) - 1;

             //member 1 gross sallary and member 1 after tax sallary
             if($scope.member1AgeAry[i]>65){
               //console.log('retirement age assumed to be 65');
               $scope.grossSalleryMember1Ary[i] = 0;
               $scope.afterTaxSallaryMember1Ary[i] = 0;
             }else{
               $scope.YourAnnualTaxableIncome = Math.ceil(SalaryExcludeTaxAndSuperPerYearMember1*$scope.InflationAry[i]);
               $scope.taxOnIncome = taxBaseArray[taxBase($scope.YourAnnualTaxableIncome)]+($scope.YourAnnualTaxableIncome-lowerBondArray[taxBase($scope.YourAnnualTaxableIncome)]+1)*taxRateArray[taxBase($scope.YourAnnualTaxableIncome)];
               $scope.grossSalleryMember1Ary[i] = $scope.YourAnnualTaxableIncome;
               $scope.afterTaxSallaryMember1Ary[i] = $scope.YourAnnualTaxableIncome - $scope.taxOnIncome ; //$scope.YourAnnualTaxableIncome-(=VLOOKUP(B3,$H$2:$K$7,4,1)+(B3-VLOOKUP(B3,$H$2:$K$7,1,1)+1)*VLOOKUP(B3,$H$2:$K$7,3,1))
             }

             //member 2 age
             $scope.member2AgeAry[i] = (Number($scope.member2Age)+i+1)-1;

             //member 2 gross sallary and member 2 after tax sallary
             if($scope.member2AgeAry[i]>65){
               //console.log('retirement age in member 2');
               $scope.grossSalleryMember2Ary[i] = 0,
               $scope.afterTaxSallaryMember2Ary[i] = 0;
             }else{
               $scope.YourAnnualTaxableIncome = SalaryExcludeTaxAndSuperPerYearMember2*$scope.InflationAry[i];
               $scope.grossSalleryMember2Ary[i] = $scope.YourAnnualTaxableIncome;

               $scope.taxOnIncome = taxBaseArray[taxBase($scope.YourAnnualTaxableIncome)]+($scope.YourAnnualTaxableIncome-lowerBondArray[taxBase($scope.YourAnnualTaxableIncome)]+1)*taxRateArray[taxBase($scope.YourAnnualTaxableIncome)];
               $scope.afterTaxSallaryMember2Ary[i] = $scope.YourAnnualTaxableIncome - $scope.taxOnIncome ;
             }

             //Investment income
             $scope.InvestmentIncome[i] = InvestmentIncomePerYear*$scope.InflationAry[i];

             //Rental income
             $scope.RentalIncome[i] = RentalIncomeInvestmentPropertyPerWeek*52*$scope.InflationAry[i];

             //Other income
             $scope.otherIncome[i] = OtherIncomePerYear*$scope.InflationAry[i];

             //EstimatedLivingCost
             if($scope.AreYouSingleOrCouple == "Single"){
               //Cells(3 + n, 14) = WorksheetFunction.VLookup(no_dep, ws4.Range("b4:d7"), 3, False) * Cells(3 + n, 4) * 52
               //console.log($scope.ExpensesForCoupleArray[$scope.NumberOfDependents].hem)
               $scope.EstimatedLivingCost[i] = $scope.ExpensesForSingleAdultsArray[$scope.NumberOfDependents].hem * $scope.InflationAry[i]*52;
             }else{
               //Cells(3 + n, 14) = WorksheetFunction.VLookup(no_dep, ws4.Range("h4:j7"), 3, False) * Cells(3 + n, 4) * 52
               $scope.EstimatedLivingCost[i] = $scope.ExpensesForCoupleArray[$scope.NumberOfDependents].hem * $scope.InflationAry[i]*52;
             }

             //Credit card liability
             $scope.CreditCardLiability[i] = Number(CreditCardOutstandingBalance);

             //loan 1 reypayment
             if($scope.DoYouHaveAnExistingLoan == "Yes"){
               $scope.Loan1Repayment[i] = $scope.ProjectedMonthlyRepayment*12;
             }else{
               $scope.Loan1Repayment[i] = 0;
             }

             //loan 2 reypayment
             if($scope.DoYouHaveMoreLoan == "Yes"){
               $scope.Loan2Repayment[i] = $scope.ProjectedMonthlyRepaymentInMoreLoan*12;
             }else{
               $scope.Loan2Repayment[i] = 0;
             }

             //Remaining balance
             $scope.RemainingBalance[i] = $scope.afterTaxSallaryMember1Ary[i]+$scope.afterTaxSallaryMember2Ary[i]+$scope.InvestmentIncome[i]+$scope.RentalIncome[i]+$scope.otherIncome[i]-$scope.EstimatedLivingCost[i]-$scope.CreditCardLiability[i]-$scope.Loan1Repayment[i]-$scope.Loan2Repayment[i];



             //after Tax Sallary Member 1 Expected Cash flow Year
             if($scope.GenderOfMember1 == "Female"){
               //VLOOKUP($Projection.E4,$'Female life table'.$A$2:$K$111,11,0),
               var finalVal1 = $scope.femaleTablePx05[$scope.member1AgeAry[i]];//female life table k42

             }else{
               //VLOOKUP($Projection.E4,$'Male life table'.$A$2:$K$111,11,0)
               var finalVal1 = $scope.maleTablePx05[$scope.member1AgeAry[i]];//male life table k42
             }

             if($scope.GenderOfMember1 == "Female"){
               var finalVal2 = $scope.femaleTablePx05[$scope.member1AgeAry[0]]; //female life table k42

             }else{
               var finalVal2 = $scope.maleTablePx05[$scope.member1AgeAry[0]]; //male life table k42
             }

             $scope.afterTaxSallaryMember1AryExpectedCashYear[i] = $scope.afterTaxSallaryMember1Ary[i]*(finalVal1/finalVal2);



             //after Tax Sallary Member 2 Expected Cash flow Year
             if($scope.GenderOfMember2 == "Female"){
               var finalVal3 = $scope.femaleTablePx05[$scope.member2AgeAry[i]]//k37
             }else{
               var finalVal3 = $scope.maleTablePx05[$scope.member2AgeAry[i]]; //k37
             }

             if($scope.GenderOfMember2 == "Female"){
               var finalVal4 = $scope.femaleTablePx05[$scope.member2AgeAry[0]]//k37
             }else{
               var finalVal4 = $scope.maleTablePx05[$scope.member2AgeAry[0]]; //k37
             }

             $scope.afterTaxSallaryMember2AryExpectedCashYear[i] = $scope.afterTaxSallaryMember2Ary[i]*(finalVal3/finalVal4);

             //Remaining balance 2
                                                                                                                                                                 //X4+AA4+SUM(AB4:AD4)-SUM(AE4:AH4)
                                                                                                                                                                 //=X8+AA8+SUM(AB8:AD8)-SUM(AE8:AH8)
        //153678.515+SUM(10000:10000)-SUM(140608:0)  =25216.745
             $scope.RemainingBalance2[i] = $scope.afterTaxSallaryMember1AryExpectedCashYear[i]+$scope.afterTaxSallaryMember2AryExpectedCashYear[i]+($scope.InvestmentIncome[i]+$scope.RentalIncome[i]+$scope.otherIncome[i])-($scope.EstimatedLivingCost[i]+$scope.CreditCardLiability[i]+$scope.Loan1Repayment[i]+$scope.Loan2Repayment[i]);

             //output year
             $scope.outputYear[i] = (i+1);

             //cash inflow
             $scope.cashInflow[i] = $scope.afterTaxSallaryMember1AryExpectedCashYear[i]+$scope.afterTaxSallaryMember2AryExpectedCashYear[i]+($scope.InvestmentIncome[i]+$scope.RentalIncome[i]+$scope.otherIncome[i]);

             //cash outflow
             $scope.cashOutflow[i] = $scope.EstimatedLivingCost[i]+$scope.CreditCardLiability[i]+$scope.Loan1Repayment[i]+$scope.Loan2Repayment[i];

             //Surplus/Deficit
             $scope.surplus[i] = ($scope.cashInflow[i] - $scope.cashOutflow[i]);

             //Discount Rate
             if($scope.outputYear[i]==0){
               $scope.discountRate[i] = 0;
             }else{
               $scope.discountRate[i] = Math.pow(1+EstimatedInterestRate/100, -($scope.outputYear[i]-0.5));
             }

             //net NPV;

             $scope.NetNPVArray[i] = $scope.surplus[i]*$scope.discountRate[i];


         };




         //$scope.NetNPV = ($scope.surplus[0]*$scope.discountRate[0])+($scope.surplus[$scope.surplus.length-1]*$scope.discountRate[$scope.discountRate.length-1])//SUMPRODUCT($D$6:$D$154,$E$6:$E$154)
         //=SUMPRODUCT($D$6:$D$154,$E$6:$E$154);

          $scope.NetNPV = 0;

         for(var i=0; i<$scope.NetNPVArray.length; i++){
           $scope.NetNPV += $scope.NetNPVArray[i];
         }
         console.log("$scope.NetNPV ==>", $scope.NetNPV)
         //console.log("$scope.NetNPVArray ==>  ", $scope.NetNPVArray);
         //console.log("$scope.RemainingBalance2 ==>" , $scope.RemainingBalance2)
         //console.log($scope.afterTaxSallaryMember2AryExpectedCashYear)

         //console.log("$scope.maleTablePx05 ==> ",$scope.femaleTablePx05.length)
         //console.log("$scope.maleTablePx05 ==> ",$scope.femaleTablePx05)
        //  console.log("$scope.maleTableCondtionalSurvivalProb ==> ", $scope.femaleTableCondtionalSurvivalProb.length)
         //console.log("$scope.maleTableCondtionalSurvivalProb ==> ", $scope.femaleTableCondtionalSurvivalProb)

         console.log("year ", $scope.year);
         console.log("InflationAry ", $scope.InflationAry)
         console.log("member1AgeAry", $scope.member1AgeAry)
         console.log("grossSalleryMember1Ary ", $scope.grossSalleryMember1Ary)
         console.log("afterTaxSallaryMember1Ary ", $scope.afterTaxSallaryMember1Ary)
         console.log("member2AgeAry  ", $scope.member2AgeAry)
         console.log("grossSalleryMember2Ary  ", $scope.grossSalleryMember2Ary)
         console.log("afterTaxSallaryMember2Ary  ", $scope.afterTaxSallaryMember2Ary)
         console.log("InvestmentIncome  ", $scope.InvestmentIncome)
         console.log("RentalIncome  ", $scope.RentalIncome)
         console.log("otherIncome  ", $scope.otherIncome)
         console.log("EstimatedLivingCost ", $scope.EstimatedLivingCost )
         console.log("CreditCardLiability  ", $scope.CreditCardLiability)
         console.log("Loan1Repayment  ", $scope.Loan1Repayment)
         console.log("Loan2Repayment  ", $scope.Loan2Repayment)
         console.log("RemainingBalance  ", $scope.RemainingBalance)
         console.log("afterTaxSallaryMember1AryExpectedCashYear  ",  $scope.afterTaxSallaryMember1AryExpectedCashYear)
         console.log("afterTaxSallaryMember2AryExpectedCashYear  ", $scope.afterTaxSallaryMember2AryExpectedCashYear)
         console.log("RemainingBalance2  ",  $scope.RemainingBalance2)
         console.log("femaleTableCondtionalSurvivalProb  ", $scope.femaleTableCondtionalSurvivalProb)
         console.log("femaleTablePx05  ", $scope.femaleTablePx05)
         console.log("maleTablePx05  ", $scope.maleTablePx05)
         console.log("outputYear  ", $scope.outputYear)
         console.log("cashInflow   ", $scope.cashInflow )
         console.log("cashOutflow  ==> ", $scope.cashOutflow)
         console.log("surplus  ", $scope.surplus)
         console.log('discountRate  ', $scope.discountRate);

         LineChartService.createChart($scope.outputYear,$scope.cashOutflow, $scope.surplus);
      }else {
            $("#myModal").modal('show');
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }



      }


    $scope.calculateFinal(true);
      netReturnChange();

    //download click
    document.getElementById("download").addEventListener("click", function() {
        if ($scope.forms.ttrForm.$valid) {
            var normalDetails = {
                firstName: $scope.personalDetails.firstName,
                lastName: $scope.personalDetails.lastName,
                email: $scope.personalDetails.email,
                mobile: $scope.personalDetails.mobile,
                postalCode: $scope.personalDetails.postalCode,
                initialInvestmentAmount: Number($scope.initialInvestmentAmount.replaceAll('$', '').replaceAll(',', '')),
            }

            PdfMaker.createChart(normalDetails);
        } else {
            $("#myModal").modal('show');
        }
    });

    //print section

    $(".print-doc").on("click", printAllCharts);

    function printAllCharts() {

        if ($scope.forms.ttrForm.$valid) {

            var printUpdate = function() {
                $('#container').highcharts().reflow();
            };


              document.getElementById("container").style.display = "block";
              //document.getElementById("containerB").style.display = "block";

              if (window.matchMedia) {
                  var mediaQueryList = window.matchMedia('print');
                  mediaQueryList.addListener(function(mql) {
                      printUpdate();
                  });
              }
              window.print();


        } else {
            $("#myModal").modal('show');
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    };



}]);
