export function filteredJobs(jobList, filters) {
  return jobList.filter((job) => {
    // Role filter
    const checkRole =
      filters.role.length === 0 ||
      filters.role.some(
        (role) => role.toLowerCase() === job.jobRole.toLowerCase()
      );

    // Experience filter - return jobs with exp requirements more than set exp

    const checkExperience =
      filters.experience.length === 0 ||
      filters.experience.some((exp) => {
        return exp === Number(job.minExp);
      });

    // Salary filter - compare jobs that fall in that specific range
    const checkMinSalary =
      filters.minimumSalary.length === 0 ||
      filters.minimumSalary.some((salaryRange) => {
        const minSalary = salaryRange.slice(0, -1);
        const jobMinSalary = Number(job.minJdSalary);
        return jobMinSalary >= minSalary;
      });

    // check if search matches company name
    const checkCompanyName =
      filters.companyName.length === 0 ||
      job?.companyName?.toLowerCase().includes(filters.companyName);

    // Combine all matches with AND
    return checkRole && checkExperience && checkMinSalary && checkCompanyName;
  });
}
