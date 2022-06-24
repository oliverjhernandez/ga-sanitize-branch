import * as core from '@actions/core'

async function run(): Promise<void> {
    try {
        const branchName = core.getInput('branch_name')
        console.log(`Sanitizing: ${branchName}`)
        const sanitizedBranchName = branchName
            .trim()
            .toLowerCase()
            .replace(/[\W_]+/g, '-')
            .substring(0, 16)
        core.exportVariable("BRANCH_NAME", sanitizedBranchName)
        console.log(sanitizedBranchName)
    } catch (error) {}
}

run()
