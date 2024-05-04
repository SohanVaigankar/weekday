export function filteredJobs(jobs, filters) {
  return jobs.filter((job) => {
    // Role filter: match any of the selected roles
    const roleMatch =
      filters.role.length === 0 ||
      filters.role.some(
        (role) => role.toLowerCase() === job.jobRole.toLowerCase()
      );

    // Experience filter: assuming you have numerical ranges for experience; adjust as needed
    const experienceMatch =
      filters.experience.length === 0 ||
      filters.experience.some((exp) => {
        const jobMinExp = Number(job.minExp);
        const jobMaxExp = Number(job.maxExp);
        return exp <= jobMaxExp && exp >= jobMinExp;
      });

    // Salary filter: match any of the salary ranges, assumes salaries are provided in some way
    const salaryMatch =
      filters.minimumSalary.length === 0 ||
      filters.minimumSalary.some((salaryRange) => {
        const minSalary = salaryRange.slice(0, -1);
        const jobMinSalary = Number(job.minJdSalary);
        const jobMaxSalary = Number(job.maxJdSalary);
        return jobMinSalary >= minSalary;
      });

    const companyNameMatch =
      filters.companyName.length === 0 ||
      job?.companyName?.toLowerCase().includes(filters.companyName);

    // Combine all matches with AND
    return roleMatch && experienceMatch && salaryMatch && companyNameMatch;
  });
}
